---
id: structure
title: ''
sidebar_label: Structure (VCF_DB)
---

# Structure (VCF_DB)
For StrainID, this is the "database" or directory with all the VCFs used by `identify-Strain.sh`. You will notice that StrainID [provides reference files][pregenerated] for both yeast and human so you can quickly get started without building up the database from scratch. However, you are free to [customize the database][custom-db] by adding your own VCF files.

```
/name/of/strain/vcf/db
|--strain1.vcf
|--strain2.vcf
|--strain3.vcf
|--strain4.vcf
```

[pregenerated]:/docs/StrainID/db//pregenerated
[custom-db]:/docs/StrainID/db//custom-db
