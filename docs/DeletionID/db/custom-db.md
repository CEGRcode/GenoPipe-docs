---
id: custom-db
title: ''
sidebar_label: Customizing your database
---

## How to add custom coordinate BED file

For custom coordinates, add your BED-formatted genomic intervals for your expected deletions to `/name/of/delDB/genomic_coord/coord.bed` file. In order to make sure DeletionID calculates an appropriate background score, the `coord.bed` file should also contain a set of other "background" intervals of similar features or random coordinates. A handful of coordinates is not sufficient to calculate a robust background calculation so make sure you sample a good number of intervals to create the reference file.

For example, the provided `sacCer3_Del` database contains the ORF intervals for most protein-coding features in yeast. For this reference, the median coverage across all ORFs in `coords.bed` determine the background threshold for depletion calls.

Next you must generate new mappability scores for the new intervals. (See how to generate new mappabilities for a set of coordinates below)

:::caution
Identifying deletions of highly __repetitive regions__ of the genome using DeletionID is not recommended!

Highly repetitive regions of the genome have very low mappability scores and are often thrown out by DeletionID even before calculating the depletion score. If you wish to proceed, please try to expand the interval (`coords.bed`) to include the entire repeat region and lower the reporting threshold in the Python script so that it reports all scores. You may want to compare the score of the region to the scores of a control sample. Your results may be strengthened using replicates, perhaps across several studies to determine if the numbers can be used to measure dramatic expansions. This has not been validated or benchmarked and should be used with caution.
:::


## How to generate a new mappability reference file

For each set of coordinates, a companion mappability file must be generated for DeletionID. The following code shows how to generate this reference file using the coordinate interval file and the genome FASTA that the coordinates are based on.

```
cd /path/to/GenoPipe/DeletionID/utility_scripts
bash generate_Mappability_File.sh -f /path/to/genome.fa -c /path/to/delDB/genomic_coord/coord.bed -t <Threads>
mv mappability.tab /path/to/delDB/mappability/mappability.tab
```
