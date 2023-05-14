---
id: faq
title: ''
sidebar_label: FAQ
---

## FAQs

#### Q: I have run DeletionID but many genes are being returned in the output report. Are all of these genes in the list depleted from my sample?
  * First check your sequencing coverage. When it is low, DeletionID can misidentify or identify many more knockout regions than are actually present.
  * Is your assay chromatin based? DeletionID does not work well with RNAseq datasets due to the heavily skewed distribution of reads across the genome. Please read the [disclaimer][supported-assays] above for more information.
#### Q: I have data from a human/mouse deletion that I wish to identify. Do you have a reference database for genes from the mm10 or hg19 genome assemblies?
  * DeletionID has not been benchmarked against samples from human or other organisms with large genomes. Please see the [caution note][supported-genomes] above for more information.

[supported-assays]:/docs/deletionid#supported-assays
[supported-genomes]:/docs/deletionid#supported-genomes
