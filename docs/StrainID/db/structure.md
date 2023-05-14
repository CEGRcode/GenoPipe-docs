---
id: structure
title: ''
sidebar_label: Structure (VCF_DB)
---

## Structure (VCF_DB)
For StrainID, this is the "database" or directory with all the VCFs used by `identify-Strain.sh`. You will notice that StrainID provides reference files for both yeast (`sacCer3_VCF`) and human (`hg19_VCF`) so you can quickly get started without building up the database from scratch. However, you are free to customize the database by adding your own VCF files.

:::caution
If you add your own VCF files, make sure they match the genome build of both your BAM files and the other VCF files.
:::

```
/name/of/strain/vcf/db
|--strain1.vcf
|--strain2.vcf
|--strain3.vcf
|--strain4.vcf
```
