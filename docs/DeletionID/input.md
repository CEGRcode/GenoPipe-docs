---
id: input
title: ''
sidebar_label: Input Files (-i)
---

# Input BAM Files (`-i`)
DeletionID takes a directory pathname for the input and will run DeletionID on all the BAM files (`*.bam`) it finds within that directory path when you execute `identify-Deletion.sh`. Make sure your files are sorted and use the standard BAM format (output of most aligner tools).

## Supported assays
Like the other GenoPipe modules, DeletionID supports input from a variety of assays. Chromatin-based assays like **whole genome sequencing (WGS)** and **ChIP-based assays** (e.g. ChIP-seq and ChIP-exo) for which we have validated this tool are appropriate inputs. The background signal of ChIP-based assays  and the smoothing effect of the binning strategy that DeletionID implements makes detection of deletions possible. Generally, genomic sequencing assays work well and transcriptomic assays are to be avoided for this module.

:::caution
Using __RNA-seq__ data is not recommended!

Because DeletionID works by looking for significant depletion of reads in the genome, NGS assays with read distributions across the genome that dramatically deviate from uniform coverage will not work well. The background calculation assumes similar read coverage across all intervals tested. If you are trying to validate deletion backgrounds for RNA-seq data, we suggest you use a tool like DESeq2 which compares expression scores from your deletion RNA-seq sample against a WT RNA-seq control to flag depletions.
:::

## Supported genomes
:::info
If you are trying to run DeletionID on samples from __human__ or another organism with a larger genome than yeast, please read this!
:::

DeletionID has been tested and validated in **yeast (sacCer3)** for >3M paired-end datasets but has not been thoroughly tested in organisms with larger genomes. Some considerations for using DeletionID on non-yeast organisms:
- **Larger genomes** will require a higher amount of sequencing to cover the genome and establish a consistent background model for checking relative depletion. Many intervals may be reported as significant that are not truly knocked out if there is insufficient coverage
- The **size of the gene "knockout" mutation** relative to the size of the genome may result in poor identification of true deletions. Practically speaking, null mutants for larger genomes are typically not full gene knockouts but rather a mutation with a dramatic deleterious effect which result in a nonfunctional protein (e.g. frameshift, early termination codon, etc).
- **Repetitive regions** can cause mappability problems, creating falsely called depleted regions or influencing the background thresholding to hide significant depletions. Regions with low mappability may need to be blacklisted in the analysis.

Please keep this in mind when running DeletionID and try to use high coverage datasets to confirm knockouts.
