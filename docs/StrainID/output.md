---
id: output
title: ''
sidebar_label: Output Files (-o)
---

# Output Report (`-o`)
If StrainID loops through a directory of `n` BAM files, there will be `n` output files written to the directory path indicated by `-o` with file reports named `XXXXXX_strain.tab`. In each output file, there is a score written for each strain VCF tested. Below are two examples of StrainID reports with descriptions of how to interpret the results.

## Example 1
Below is an example StrainID output file from an "MCF-7" cell line sample ([ENCFF354LGE][ENCFF354LGE]).
```
	ENCFF354LGE.bam
A549.vcf	-3.474049648043522
LnCap.vcf	-3.5372670186299637
K562.vcf	-2.7537084792821593
HCT116.vcf	-3.6683635463465363
HELA.vcf	-4.021637878101243
SKnSH.vcf	-2.123208861240921
HepG2.vcf	-2.707522230324179
MCF7.vcf	2.6946153576498024
```

For this report, the MCF-7 score relative to the scores of the other strains is much higher relative to the scores of other strains. Thus, this sample is classified by StrainID to be from a MCF-7 background.

## Example 2
Below is an example StrainID output file from an "SK-N-SH" cell line sample ([ENCFF000QXV][ENCFF000QXV]).
```
	ENCFF000QXV.bam
A549.vcf	-0.5559535480469241
LnCap.vcf	-4.600347667405377
K562.vcf	NaN
HCT116.vcf	NaN
HELA.vcf	NaN
SKnSH.vcf	4.049767512841029
HepG2.vcf	NaN
MCF7.vcf	-1.5507918429311454
```

In reading these reports, look for the VCF file with the largest value as the best match VCF for the data. When you see the "NaN" score associated with a VCF file (K562, HCT116, HeLA, and HepG2 in this case), then the scripts found zero alternate allele matches in the data for that VCF. In these cases, it is still possible that the dataset is sourced from one of these strains on the chance that no reads mapped to the region, particularly for low coverage datasets.

For this report, due to the dramatically high value of the SK-N-SH score relative to the scores of the other strains, this sample would be confidently classified as sourced from the SK-N-SH cell line.

## Example 3
Sometimes in reports you may see an 'Inf' score (should be extremely rare). In these cases, the background of the dataset was not sufficiently sampled and no reads sampled included deviations from the reference genome. You may try re-running StrainID with a different seed.
```
	XXXXX.bam
strain1.vcf	-5.400766523407889
strain2.vcf	Inf
```


[ENCFF354LGE]:https://www.encodeproject.org/files/ENCFF354LGE/
[ENCFF000QXV]:https://www.encodeproject.org/files/ENCFF000QXV/
