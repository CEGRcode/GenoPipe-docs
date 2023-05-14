---
id: faq
title: ''
sidebar_label: FAQ
---

## FAQs

#### Q: What do the "NaN" or "Inf" scores mean in the StrainID output report?
  - Please check the examples with descriptions in the section describing the [output reports][read-output].
#### Q: All of my strains are reporting "NaN". Does my sample truly not match any of the strains I gave it?
  - Make sure your VCF files are non-empty
  - Genome build match: make sure your BAM files are aligned to the same genome build your VCF files are based on. If you performed a LiftOver to get your VCF file, there might be some unresolved issues with the chain file that caused some misalignments.
  - Make sure your read coverage is decent across the VCF alleles
  - It's still possible to return a "NaN" for all VCF files if no data mapped to the alleles you are checking for
#### Q: I customized a set of VCF files to use with StrainID but it is taking forever to run. Is there a way to speed things up?
  - You may be using large VCF files across a large genome. The larger the VCF, the longer StrainID will take to run. Consider subsampling the VCF or filtering to only include high-confidence or unique alleles. You do not need a complete set of all alleles to calculate this QC heuristic.

[read-output]:/docs/StrainID/output
