---
id: strainid
title: Usage
sidebar_label: Usage
---

<!-- [strainid-icon]:../static/genopipe-img/strainid-icon.png -->

__StrainID compares a database of VCF files against an aligned BAM file to check for the presence of SNPs in order to determine a likely cell line/strain used in the experiment.__


![Figure1C](/genopipe-img/figure1c.png)

```bash
identify-Strain.sh -i /path/to/BAM -g /path/to/genome/fASTA -v /path/to/VCF/files -o /path/to/output
```

<!-- ### Dependencies

Set-up your dependencies with conda or singularity: -->
