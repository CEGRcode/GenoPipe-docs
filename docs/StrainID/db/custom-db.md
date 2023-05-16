---
id: custom-db
title: ''
sidebar_label: Customizing your database
---

# Customizing your VCFs
Adding strains is straightforward. Simply add a file in standard [Variant Call Format][vcf-specs] to the `/name/of/strain/vcf/db/` directory.

```
/name/of/strain/vcf/db
|--strain1.vcf
|--strain2.vcf
|--strain3.vcf
|--strain4.vcf
```

## Formatting
Make sure that at minimum, you include a header with VCF version and "contig" or chromosome info at the top. For examples, see the pregenerated **hg19_VCF** reference VCFs.
```
##fileformat=VCFv4.2
##contig=<ID=chr1,length=249250621>
##contig=<ID=chr2,length=243199373>
##contig=<ID=chr3,length=198022430>
##contig=<ID=chr4,length=191154276>
...
##contig=<ID=chrM,length=16571>
##contig=<ID=chrUn_gl000226,length=15008>
##contig=<ID=chr18_gl000207_random,length=4262>
#CHROM	POS	ID	REF	ALT	QUAL	FILTER	INFO
chr6	117715410	.	C	A	0	PASS	.
chr8	27690580	.	C	G	0	PASS	.
chr11	66616566	.	G	A	0	PASS	.
chr11	125875659	.	G	C	0	PASS	.
...
```

:::caution
Genome build is important to note here. Make sure your VCF file is based on the same genome build as your BAM file and that the contig/chr names match the VCF headers.
:::


## Custom DepMap set (hg38)
If you are interested in several human cell line not available in the pregenerated sets, consider using the [provided scripts][hg38-depmap] to download and formats the variants in DepMap for all cell lines in `Model.csv`. To avoid downloading the full set, you could update Model.csv to only contain the rows you are interested in. Note that Model.csv was last pulled on May 14, 2023 and new cell lines may have been added to DepMap since. [Redownload `Model.csv` to get the latest][model-csv].

:::note
While `Model.csv` might be out of date as a list of cell lines, the variants pulled are the most recent at the time of the script's execution. Only update `Model.csv` if there is a newly added cell line that is missing. To update variants, simply re-execute the script.
:::


[vcf-specs]:https://genome.ucsc.edu/goldenPath/help/vcf.html
[model-csv]:https://depmap.org/portal/download/all/?releasename=DepMap+Public+23Q2&filename=Model.csv
[hg38-depmap]:/docs/StrainID/db/pregenerated#hg38_depmap
