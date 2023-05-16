---
id: genome
title: ''
sidebar_label: Genome Files (-g)
---

# Reference Genome (`-g`)
A reference genome is required for StrainID to determine the background model of mutation rates. Include the filepath for to the genomic FASTA file for the parameter value. Make sure the genome used matches the genome the VCF coordinates are based off of.

:::caution
Input BAM files, VCF reference files, and Genome reference files all NEED to be based on the same genome build. Do not mix and match for this!
:::
