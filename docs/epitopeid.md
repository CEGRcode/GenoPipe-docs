---
id: epitopeid
title: EpitopeID
sidebar_label: EpitopeID
---

<!-- ![epitopeid-icon](/genopipe-img/epitopeid-icon.png)-->

__EpitopeID identifies and determines the genomic location of epitopes or other inserted sequences relative to genomic loci.__

![Figure1A](/genopipe-img/figure1a.png)

## Usage
```bash
bash identify-Epitope.sh -i /path/to/FASTQ -o /path/to/output -d /path/to/genome/database -t <Threads - Default 1>
eg: bash identify-Epitope.sh -i /input -o /output -d /sacCer3_EpiID -t 2
```

## Input (`-i`)

EpitopeID takes [gzipped][gzip-man] FASTQ files from single-end(SE) or paired-end(PE) datasets to run. If your FASTQ files are not already compressed, you can zip them yourself if gzip is installed:

```bash
gzip XXXXX_R1.fastq
```

It is expected that at least one file for each sample (even for single-end data) follows the naming convention of `XXXXX_R1*.fastq.gz` and a second file if the data is paired-end following `XXXXX_R2*.fastq.gz`. This is based on the Illumina naming standard.

:::caution
Make sure none of the sample names used in the filenames have an occurrence of `_R1` outside of the read-specifying term to avoid confusion for EpitopeID when it is determining which samples have a read2 file.

For example, samples named like this will cause confusion:<br/>
❌ `Sample_R13A_R1.fastq.gz`

Alternatively try:<br/>
✅ `Sample-R13A_R1.fastq.gz`<br/>
✅ `SampleR13A_R1.fastq.gz`
:::

### Using published data downloaded from SRA
If you obtained data from SRA using sra-tools, the FASTQ files may have the read id printed in the FASTQ header like this:
```

```

Currently EpitopeID does not support this format so you will need to reformat the FASTQ files. Below is an example of how to reformat each R1/R2 file for EpitopeID using `SRR10054430` as an example:
```
# Reformat quality score header and strip SRA read id to use raw read id to original sequencer-determined id
# unzip | reformat with sed | zip > output
gunzip -dc SRR10054430_1.fastq.gz | sed 's/+.*/+/g; s/\@SRR[0-9]\{7\}\.[0-9]\+ /\@/g' | gzip -c > SRR10054430_R1.fastq.gz
gunzip -dc SRR10054430_2.fastq.gz | sed 's/+.*/+/g; s/\@SRR[0-9]\{7\}\.[0-9]\+ /\@/g' | gzip -c > SRR10054430_R2.fastq.gz
```

## Reference Files (`-d`)

For EpitopeID, this is the "database" or directory with four types of reference files used by `identify-Epitope.sh`. You will notice that EpitopeID provides reference files for both yeast (`sacCer3_EpiID`) and human (`hg19_EpiID`) so you can quickly get started without building up the database from scratch. However, you are free to customize and build your own set of files (e.g. add different epitope tags to check for, use a different genome build).

| sacCer3(yeast) | hg19(human) |
| :--------------: | :-----------: |
| AID | LAP-tag |
| CBP |  |
| Extended-Tap |  |
| FLAG-3x |  |
| FRB |  |
| GFP |  |
| HA_v1 |  |
| HA_v2 |  |
| HA_v3 |  |
| HaloTag |  |
| MNase_v2 |  |
| Myc-3x |  |
| ProteinA |  |


:::note
The provided database files are missing the genomic reference file for storage reasons. You will need to follow the directions below to download `genome.fa` before running EpitopeID if you are planning to use the provided defaults.
:::

### Database structure
Whether you use the provided reference files or create your own, the database should use the following directory structure for the sake of organization, clarity, and consistency, and ensuring that EpitopeID can find the correct reference files.
```
/name/of/epiDB
|--FASTA_tag
|  |--Tag_DB
|  |  |--tagname1.fa
|  |  |--tagname2.fa
|  |  |--tagname3.fa
|  |--ALL_TAG.fa
|  |--ALL_TAG.fa.1.bt2       # EpitopeID will automatically generate these
|  |--ALL_TAG.fa.2.bt2       # Bowtie2 index files if any are missing
|  |--ALL_TAG.fa.3.bt2       #
|  |--ALL_TAG.fa.4.bt2       #
|  |--ALL_TAG.fa.rev.1.bt2   #
|  |--ALL_TAG.fa.rev.2.bt2   #
|--FASTA_genome
|  |--genome.fa              # Not included, download separately
|--annotation
|  |--genome_annotation.gff.gz
|--blacklist_filter
|  |--blacklist.bed
```

Below is a list of the the filenames that EpitopeID looks for during execution and some information on the provided yeast and human defaults.

* The `FASTA_tag/ALL_TAG.fa` is the FASTA formatted collection of all epitope sequences to search for. The [yeast tag database][saccer3-tag-ref] and the [human tag database][hg19-tag-ref] default epitopes are listed in the table above. It is easy to customize the list to add other epitopes if your epitope of interest is not included (see sections below).
* The `FASTA_genome/genome.fa` is the reference sequence used for the genomic alignments and the sequence that the below genome annotations are based on.
* The `annotation/genome_annotation.gff.gz` file defines the bin coordinates to use when localizing the epitope insertion in PE datasets. The yeast default uses SGD gene annotation coordinates to defines one bin for the length of each gene, 250bp bins flanking each set of gene coordinates, and 250bp bins breaking up the remaining intergenic regions. The human default similarly bins out the genome using 1000bp windows on the NCBI Refseq annotations.
* The `blacklist_filter/blacklist.bed` allows the user to ignore artefactual or unwanted alignments.

Below is more information on how to use the utility scripts to download and customize your reference files.


### Downloading the sacCer3 genome

Use the utility scripts by following the commands below to download the sacCer3 genome and format the chromosome names. The reference files are based on the arabic numeral chromosome naming system (i.e. "chr1", "chr2",..."chr16","chrM","2-micron").

```bash
cd /path/to/GenoPipe/EpitopeID/utility_scripts/genome_data
bash download_sacCer3_Genome.sh
mv genome.fa /path/to/sacCer3_EpiID/FASTA_genome/
```

### Downloading the hg19 genome

Use the utility scripts by following the commands below to download the hg19 genome and move it to the appropriate directory.

```bash
cd /path/to/GenoPipe/EpitopeID/utility_scripts/genome_data
bash download_hg19_Genome.sh
mv genome.fa /path/to/hg19_EpiID/FASTA_genome/genome.fa
```


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



<!-- ### Custom genome from scratch

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


## Output Report (`-o`)

The output report is saved to the user-provided output directory in a file named based on the input FASTQ files (`/path/to/output/XXXXX_R1-ID.tab`). Below is a sample report based on the results from running EpitopeID on the ENCODE [ENCFF415CJF][ENCFF415CJF] sample.

```
EpitopeID	EpitopeCount
LAP-tag	435

GeneID	EpitopeID	EpitopeLocation	EpitopeCount	pVal
NR4A1|chr12:52416616-52453291	LAP-tag	C-term	9	3.580493355965414e-24
```

The first part of the report shows which epitopes in `Tag_DB` were identified in the sample (**EpitopeID column**) and how many reads mapped to this epitope (**EpitopeCount**) to help quantify the coverage of the epitopes which relates to the confidence of the call.

The second part of the report shows which epitopes localized to which regions/tiles of the genome significantly (sorted by pvalue if multiple hits). The columns specify the coordinate interval (**GeneID**), which epitope maps to this locus (**EpitopeID**), if this occurs on the N or C-terminus (**EpitopeLocation**), the number of reads mapping to this tile (**EpitopeCount**), and the poisson-calculated associated p-value to indicate confidence of the site (**pVal**).


In this report there were 435 reads that mapped to the LAP-tag epitope. The high read count supports "the epitope was successfully integrated into the sample.""

In this report there were 9 read pairs that spanned both the LAP-tag and the NR4A1 gene(at genomic locus chr12:52416616-52453291) toward the sequence encoding the C-terminus. This entry supports that the LAP-tag epitope was integrated at the C-terminus of NF4A1.

## Threading (`-t`)

This optional input is used to specify the number of threads to used for the Bowtie2 alignment commands. Defaults to 1.


## Example: Set-up EpitopeID and run on yeast example
```bash
git clone www.github/CEGRcode/GenoPipe
cd GenoPipe/EpitopeID/

# remake the epitope Tags file and index it (if custom sequences are added)
cd sacCer3_EpiID/FASTA_tag/Tag_DB
  ## add custom sequences here ##
bash ../../../utility_scripts/update_TagDB.sh
mv ALL_TAG.fa* ../
# download the genome
cd ../../../utility_scripts/genome_data/
bash download_sacCer3_Genome.sh
mv genome.fa ../../sacCer3_EpiID/FASTA_genome/
# download annotations
# cd ../annotation_data/
# bash generate_sacCer3_GenomeAnnotation.sh -g ../../sacCer3_EpiID/FASTA_genome/genome.fa -b 250
# mv genome_annotation.gff.gz ../../sacCer3_EpiID/annotation/
cd ../../
# run EpitopeID on FASTQs in the `sample` directory below
mkdir ../output
bash identify_Epitope.sh -i ../samples/ -o ../output/ -d sacCer3_EpiID -t 4
```


## FAQs

* Q: My epitope sequence isn't part of the sequences in the default provided reference files (either `sacCer3_EpiID` or `hg19_EpiID`). Can I still use EpitopeID for checking my samples?
  * Yes! Please scroll up to the [**Customizing annotations**][customize-annotations] section for directions on how to add your epitope sequence to the database.
* Q: I added my own custom tag sequences to the `TagDB` directory but when I run EpitopeID, none of my samples are getting significant hits to the new tags.
  * There are a few things you should check before concluding that the epitope is not present in your sample:
    1. Did you recreate the `ALL_TAG.fa` file? Open it up to make sure your sequences are there. If they aren't there, follow the commands in the [**Customizing epitopes**][customizing-epitopes] section above.
    2. Did you recreate the Bowtie2 index files for `ALL_TAG.fa`? Remove at least one of the Bowtie2 index files (e.g. `ALL_TAG.1.bt2`) and run EpitopeID. EpitopeID automatically recreates the index if any files are missing but it does not check that the index files match the FASTA sequence. If you modify the `ALL_TAG.fa` without recreating the BWA index files, EpitopeID will run on the old set of tag sequences.
* Q: What does the N-term or C-term mean in the output?
  * For each gene, three bins are created for (1) the ORF interval, (2) a bin upstream of the start codon, (3) a bin downstream of the stop codon, each of which correspond to the gene, N-terminus, or C-terminus of the peptide chain gene product. If EpitopeID is mapping more strongly to the N or C-terminus, it is likely that the epitope is tagged to that side of the endogenous peptide chain.
  * Note: if the epitope sequence provided is not the protein-coding sense strand, then you should invert your interpretation of the report for which side of the endogenous peptide chain is tagged.
* Q: I tried running EpitopeID on my samples using `sacCer3_EpiID`/`hg19_EpiID` and it is telling me that I am missing the `genomic.fa` file. Where can I find it?
  * Due to storage reasons, we do not include the genomic reference in the Github download for GenoPipe. However, we do provide scripts that will help you to download and format the reference genomes that we used. See "Downloading the sacCer3/hg19 genome".
  * Otherwise you can use your own genomic sequence. If you do, then remember to rename it to `genome.fa` and move it to the appropriate directory. Also make sure that the annotations you use are based on the same reference build.
* Q: I ran EpitopeID on some samples I downloaded from SRA. Why is EpitopeID throwing an error?
  * EpitopeID currently does not support samples with read IDs in the FASTQ quality score header section. Please read more about [running EpitopeID on data from public repositories][published-sra]

[ENCFF415CJF]:https://www.encodeproject.org/files/ENCFF415CJF/
[gzip-man]:https://www.gnu.org/software/gzip/manual/gzip.html
[ensembl-ftp]:https://useast.ensembl.org/info/data/ftp/index.html
[ucsc-download]:https://hgdownload.soe.ucsc.edu/downloads.html

[saccer3-tag-ref]:https://github.com/CEGRcode/GenoPipe/tree/master/EpitopeID/sacCer3_EpiID/FASTA_tag/Tag_DB
[hg19-tag-ref]:https://github.com/CEGRcode/GenoPipe/tree/master/EpitopeID/hg19_EpiID/FASTA_tag/Tag_DB

[published-sra]:/docs/epitopeid#using-published-data-downloaded-from-sra
[download-sacCer3]:/docs/epitopeid#downloading-the-saccer3-genome
[download-hg19]:/docs/epitopeid#downloading-the-hg19-genome
[customize-annotations]:/docs/epitopeid#customizing-annotations
[customize-epitopes]:/docs/epitopeid#customizing-epitopes
