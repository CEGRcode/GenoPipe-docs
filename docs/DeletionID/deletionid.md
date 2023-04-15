---
id: deletionid
title: DeletionID
sidebar_label: DeletionID
---

<!-- [deletionid-icon]:../static/genopipe-img/deletionid-icon.png -->

__DeletionID identifies significant depletions of aligned NGS tags in the genome relative to a background model. This tool is set-up to confirm full gene knockouts.__

![Figure1B](/genopipe-img/figure1b.png)

## Usage
```bash
bash identify-Deletion.sh -i /path/to/BAM -o /path/to/output -d /path/to/genome/database
eg: bash identify-Deletion.sh -i /input -o /output -d /sacCer3_Del
```


## Input(`-i`)
DeletionID takes a directory pathname for the input and will run DeletionID on all the BAM files (`*.bam`) it finds within that directory path when you execute `identify-Deletion.sh`. Make sure your files are sorted and use the standard BAM format (output of most aligner tools).

### Supported assays
Like the other GenoPipe modules, DeletionID supports input from a variety of assays. Chromatin-based assays like **whole genome sequencing (WGS)** and **ChIP-based assays** (e.g. ChIP-seq and ChIP-exo) for which we have validated this tool are appropriate inputs. The background signal of ChIP-based assays  and the smoothing effect of the binning strategy that DeletionID implements makes detection of deletions possible. Generally, genomic sequencing assays work well and transcriptomic assays are to be avoided for this module.

:::caution
Using __RNA-seq__ data is not recommended!

Because DeletionID works by looking for significant depletion of reads in the genome, NGS assays with read distributions across the genome that dramatically deviate from uniform coverage will not work well. The background calculation assumes similar read coverage across all intervals tested. If you are trying to validate deletion backgrounds for RNA-seq data, we suggest you use a tool like DESeq2 which compares expression scores from your deletion RNA-seq sample against a WT RNA-seq control to flag depletions.
:::

### Supported genomes
:::info
If you are trying to run DeletionID on samples from __human__ or another organism with a larger genome than yeast, please read this!
:::

DeletionID has been tested and validated in **yeast (sacCer3)** for >3M paired-end datasets but has not been thoroughly tested in organisms with larger genomes. Some considerations for using DeletionID on non-yeast organisms:
- **Larger genomes** will require a higher amount of sequencing to cover the genome and establish a consistent background model for checking relative depletion. Many intervals may be reported as significant that are not truly knocked out if there is insufficient coverage
- The **size of the gene "knockout" mutation** relative to the size of the genome may result in poor identification of true deletions. Practically speaking, null mutants for larger genomes are typically not full gene knockouts but rather a mutation with a dramatic deleterious effect which result in a nonfunctional protein (e.g. frameshift, early termination codon, etc).
- **Repetitive regions** can cause mappability problems, creating falsely called depleted regions or influencing the background thresholding to hide significant depletions. Regions with low mappability may need to be blacklisted in the analysis.

Please keep this in mind when running DeletionID and try to use high coverage datasets to confirm knockouts.


## Reference Files (`-d`)

For DeletionID, this is the "database" or directory with all the reference files used by `identify-Deletion.sh`. DeletionID provides reference files for yeast (`sacCer3_Del`) so you can quickly get started without building up the database from scratch. However, you are free to customize the database by adding a different set of coordinate new mappability scores or by looking at a different set of coordinate intervals.

Below is a list of the files that DeletionID looks for during execution and some information on the provided yeast and human defaults.

* The `coord.bed` is the file with the genomic coordinate intervals we are looking for depletions within. The provided `sacCer3_Del` uses the set of yeast gene coordinate intervals.
* The `mappability.tab` is the file with the calculated mappability scores for each coordinate interval within the `coord.bed` file. This will need to be regenerated if you use a different `coord.bed` file from the one provided.

Whether you use the provided reference files or create your own, the database should use the following directory structure both to ensure that DeletionID can find the correct reference files.

```
/name/of/delDB
|--genomic_coord
   |--coord.bed
|--mappability
   |--mappability.tab
```

Below is more information on how to use the utility scripts to download and customize your reference files.

### How to add custom coordinate BED file

For custom coordinates, add your BED-formatted genomic intervals for your expected deletions to `/name/of/delDB/genomic_coord/coord.bed` file. In order to make sure DeletionID calculates an appropriate background score, the `coord.bed` file should also contain a set of other "background" intervals of similar features or random coordinates. A handful of coordinates is not sufficient to calculate a robust background calculation so make sure you sample a good number of intervals to create the reference file.

For example, the provided `sacCer3_Del` database contains the ORF intervals for most protein-coding features in yeast. For this reference, the median coverage across all ORFs in `coords.bed` determine the background threshold for depletion calls.

Next you must generate new mappability scores for the new intervals. (See how to generate new mappabilities for a set of coordinates below)

:::caution
Identifying deletions of highly __repetitive regions__ of the genome using DeletionID is not recommended!

Highly repetitive regions of the genome have very low mappability scores and are often thrown out by DeletionID even before calculating the depletion score. If you wish to proceed, please try to expand the interval (`coords.bed`) to include the entire repeat region and lower the reporting threshold in the Python script so that it reports all scores. You may want to compare the score of the region to the scores of a control sample. Your results may be strengthened using replicates, perhaps across several studies to determine if the numbers can be used to measure dramatic expansions. This has not been validated or benchmarked and should be used with caution.
:::


### How to generate a new mappability reference file

For each set of coordinates, a companion mappability file must be generated for DeletionID. The following code shows how to generate this reference file using the coordinate interval file and the genome FASTA that the coordinates are based on.

```
cd /path/to/GenoPipe/DeletionID/utility_scripts
bash generate_Mappability_File.sh -f /path/to/genome.fa -c /path/to/delDB/genomic_coord/coord.bed -t <Threads>
mv mappability.tab /path/to/delDB/mappability/mappability.tab
```


## Output Report (`-o`)

The output report is saved to the user-provided output directory in a file named based on the input BAM files (`/path/to/output/XXXXX_deletion.tab` from some input `XXXXX.bam`). Below is a sample report based on the results from running DeletionID on a whole genome sequencing dataset of the APE3 deleted knockout from the Yeast Knockout Collection (ERS838258 sample downloaded from ENA and generated by Puddu et al, 2019).

```
LEU2 No Data Detected
URA3 No Data Detected
APE3 -3.3992739779627357
```

The first column of the report lists out the intervals (ORFs) with significantly depleted reads, sorted by the DeletionID score values in the second column which sort the more negative scores (more read depleted intervals) first. This sample is from an APE3 knockout in a LEU2 and URA3 knockout background so we expect all three gene intervals to show up in the report. LEU2 and URA3 show **No Data Detected** which indicates no reads mapped to this interval. APE3 shows a very strong depletion with a large negative score (-3.3992...) confirming the knockout as likely.


## FAQs

* Q: I have run DeletionID but many genes are being returned in the output report. Are all of these genes in the list depleted from my sample?
  * First check your sequencing coverage. When it is low, DeletionID can misidentify or identify many more knockout regions than are actually present.
  * Is your assay chromatin based? DeletionID does not work well with RNAseq datasets due to the heavily skewed distribution of reads across the genome. Please read the [disclaimer][supported-assays] above for more information.
* Q: I have data from a human/mouse deletion that I wish to identify. Do you have a reference database for genes from the mm10 or hg19 genome assemblies?
  * DeletionID has not been benchmarked against samples from human or other organisms with large genomes. Please see the [caution note][supported-genomes] above for more information.

[supported-assays]:/docs/deletionid#supported-assays
[supported-genomes]:/docs/deletionid#supported-genomes
