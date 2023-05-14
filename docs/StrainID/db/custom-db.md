---
id: custom-db
title: ''
sidebar_label: Customizing your database
---

### Customizing your VCFs
Adding strains is straightforward. Simply add a file in standard [Variant Call Format][vcf-specs] to the `/name/of/strain/vcf/db/` directory. The database should use the following directory structure both to ensure that StrainID can find the correct reference files.

```
/name/of/strain/vcf/db
|--strain1.vcf
|--strain2.vcf
|--strain3.vcf
|--strain4.vcf
```

[vcf-specs]:https://genome.ucsc.edu/goldenPath/help/vcf.html
