---
id: custom-db
title: ''
sidebar_label: Customizing your database
---

## Customizing your database

### Customizing epitopes

If you choose to add or remove epitope tags to your database, you must add/remove the files with the sequences in FASTA format to/from `FASTA_tag/TagDB` and recreate the `FASTA_tag/ALL_TAG.fa` file so it includes the tag sequences you want. The following commands show you how to copy `my-custom-tag.fa` into the database and remake the file using the provided scripts.

```bash
# Copy or remove the FASTA files with your tag sequences into the Tag_DB directory
cp my-custom-tag.fa /path/to/Tag_DB
cd /name/of/epiDB/FASTA_tag/Tag_DB
bash /path/to/GenoPipe/EpitopeID/utility_scripts/update_TagDB.sh
mv ALL_TAG.fa* /path/to/hg19_EpiID/FASTA_tag/
```

### Customizing annotations
GenoPipe provides the utility scripts for recreating the precomputed reference annotation files. The scripts download (yeast and human) annotations and for format gene annotation files to the EpitopeID format by tiling the genome around and including gene intervals.

The precomputed files should work for most (yeast and human) use cases but if you need to compute these reference files yourself, use the available `utility_scripts` as follows:

#### Make `genome_annotation.gff.gz` with a different bin size
If you wish to change the bin size of the tiles from the reference files GenoPipe already provides, you can rerun our scripts with a different value in the `-b` flag. The following are the specific commands you can execute to do so.

```bash
# sacCer3
cd /path/to/GenoPipe/EpitopeID/utility_scripts/annotation_data
bash generate_sacCer3_GenomeAnnotation.sh -g /path/to/genome/sacCer3.fa -b <BIN_SIZE>
```

```bash
# hg19
cd /path/to/GenoPipe/EpitopeID/utility_scripts/annotation_data
bash generate_hg19_GenomeAnnotation.sh -g /path/to/genome/hg19.fa -b <BIN_SIZE>
```

```bash
# hg38
cd /path/to/GenoPipe/EpitopeID/utility_scripts/annotation_data
bash generate_hg38_GenomeAnnotation.sh -g /path/to/genome/hg38.fa -b <BIN_SIZE>
```


#### Make `genome_annotation.gff.gz` with custom annotations
There may be a few reasons to create a custom annotation reference set:
  * Working with non-yeast and non-human data
  * Inserted sequence localized to non-ORF genomic location (e.g. insertions in enhancer region)
  * Inserted sequence/epitope localized to ORF not included in precomputed annotations (rare, for genes not included in official set at the time we created the precomputed files)

:::note
EpitopeID actually can still detect and localize insertions from non-ORF regions but the report will only include the nearest ORF or genomic tile and may be more difficult to read/interpret. Creating a customized annotation reference file would improve clarity in the output report but is not *necessary*.
:::

1. Create a custom `.gff` file including the feature with the expected localization.
  - It may be a good idea to include other potential off-target annotations for better readability of the report. Otherwise off-target localizations will be reported with only the genomic coordinate information.
  - If you are working with a custom genome build, you will need the gene annotations in `.gff` format for the genome build. [Ensembl][ensembl-ftp] and [UCSC][ucsc-download] can be good resources for finding gene annotations associated with official genome builds across a variety of organisms. Please make sure they are in `.gff` file format for compatibility with the utility scripts.

```
# Example .gff entry like an enhancer or something
# myunicorn_annotations.gff

```

2. Execute the following commands to tile the genome and merge the annotations with the tiled regions.

```bash
MYGFF=/path/to/myunicorn_annotations.gff
GENOME=/path/to/genome/unicorn1.fa
# Choose a bin size (consider size of genome)
BIN=250

# Add flanking sequence to
perl parsers/parse_Generic_GFF.pl $MYGFF $BIN temp.gff
# Tile genome
perl genome_bin/bin_genome.pl $GENOME $BIN unicorn1_BIN.gff
# Intersect gene annotations
bedtools subtract -a unicorn1_BIN.gff -b temp.gff > unicorn1_BIN_temp.gff
# Merge annotations and bin file
perl genome_bin/rename_BIN_GFF.pl unicorn1_BIN_temp.gff unicorn1_BIN_filter.gff
cat unicorn1_BIN_filter.gff temp.gff > unicorn1_ALL.gff
sort -k 1,1 -k4,4n unicorn1_ALL.gff > genome_annotation.gff
# Compress
gzip -f genome_annotation.gff
# Clean-up
rm temp.gff unicorn1_BIN.gff unicorn1_BIN_temp.gff unicorn1_BIN_filter.gff unicorn1_ALL.gff
```



### Customizing filter

```bash
# bedtools intersect -v -abam $OUTPUT/$SAMPLE/orf.bam -b $DATABASE/blacklist_filter/blacklist.bed > $OUTPUT/$SAMPLE/orf_filter.bam
mv /path/to/blacklist_filter.bed /path/to/EpiID-DB/blacklist_filter/blacklist.bed
```



<!-- ## Custom genome from scratch

```bash
EPITOPEID=/path/to/GenoPipe/EpitopeID
# outline new directory structure
mkdir unicorn_EpiID
cd unicorn_EpiID
mkdir FASTA_genome
mkdir -p FASTA_tag/TagDB
mkdir annotation
mkdir blacklist_filter
# copy over genome
cp /path/to/unicorn/genome.fa FASTA_genome/genome.fa
# copy over tag sequences
cp /path/to/tag/sequences/*.fa FASTA_tag/TagDB/
cd $EPITOPEID/utility_scripts

``` -->
