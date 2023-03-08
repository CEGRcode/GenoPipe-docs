---
id: strainid
title: StrainID
sidebar_label: StrainID
---

<!-- [strainid-icon]:../static/genopipe-img/strainid-icon.png -->

__StrainID compares a database of VCF files against an aligned BAM file to check for the presence of SNPs in order to determine a likely cell line/strain used in the experiment.__

A report is generated that scores each input BAM with a value for each given VCF file such thataslkdjfal;skjdf alsdkjf

![Figure1C](/genopipe-img/figure1c.png)

## Usage
```bash
identify-Strain.sh -i /path/to/BAM -g /path/to/genome/fASTA -v /path/to/VCF/files -o /path/to/output
```

## Input(`-i`)
StrainID takes a directory pathname for the input and will run StrainID on all the BAM files (`*.bam`) it finds within that directory path when you execute `identify-Strain.sh`.

:::caution
It is extremely important that the BAM files provided match the reference genome build that the VCF files are based off of.
:::

## Reference Genome (`-g`)
A reference genome is required for StrainID to determine the background model of mutation rates. Include the filepath for to the genomic FASTA file for the parameter value. Make sure the genome used matches the genome the VCF coordinates are based off of.

## Reference Files (`-v`)

For StrainID, this is the "database" or directory with all the VCFs used by `identify-Strain.sh`. You will notice that StrainID provides reference files for both yeast (`sacCer3_VCF`) and human (`hg19_VCF`) so you can quickly get started without building up the database from scratch. However, you are free to customize the database by adding your own VCF files.

:::caution
If you add your own VCF files, make sure they match the genome build of both your BAM files and the other VCF files.
:::

The table below lists the strain VCFs provided yeast and human databases that come with the StrainID tool.

* For yeast, the VCF-DB (`sacCer3_VCF/*.vcf`) with strains listed below
* For humans, the VCF-DB (`hg19_VCF/*.vcf`) with strains listed below

|`sacCer3_VCF`|`hg19_VCF`|
|:-----------:|:-------- :|
| BY4741      | A549     |
| BY4742      | HCT116   |
| CEN.PK2-1Ca | HELA    |
| D273-10B    | HepG2     |
| JK9-3d      | K562    |
| RedStar     | LnCap     |
| RM11-1A     | MCF7    |
| SEY6210     | SKnSH     |
| Sigma1278b-10560-6B |  |
| SK1         |   |
| W303        |   |
| Y55         |   |



### Customizing your VCFs
Adding strains is very straightforward. Simply add a file in standard [Variant Call Format][vcf-specs] to the `/name/of/strain/vcf/db/` directory. The database should use the following directory structure both to ensure that StrainID can find the correct reference files.

```
/name/of/strain/vcf/db
|--strain1.vcf
|--strain2.vcf
|--strain3.vcf
|--strain4.vcf
```


## Output Report (`-o`)
If StrainID loops through a directory of `n` BAM files, there will be `n` output files written to the directory path indicated by `-o` with file reports named `XXXXXX_strain.tab`. In each output file, there is a score written for each strain VCF tested. Below are two examples of StrainID reports with descriptions of how to interpret the results.

### Example 1
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

### Example 2
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

<!-- ### Example 3  (Inf)-->


## FAQs

- Q: What do the "NaN" or "Inf" scores mean in the StrainID output report?
  - Please check the examples with descriptions in the section describing the [output reports][read-output].
- Q: All of my strains are reporting "NaN". Does my sample truly not match any of the strains I gave it?
  - Make sure your VCF files are non-empty
  - Genome build match: make sure your BAM files are aligned to the same genome build your VCF files are based on. If you performed a LiftOver to get your VCF file, there might be some unresolved issues with the chain file that caused some misalignments.
  - Make sure your read coverage is decent across the VCF alleles
  - It's still possible to return a "NaN" for all VCF files if no data mapped to the alleles you are checking for
- Q: I customized a set of VCF files to use with StrainID but it is taking forever to run. Is there a way to speed things up?
  - You may be using large VCF files across a large genome. The larger the VCF, the longer StrainID will take to run. Consider subsampling the VCF or filtering to only include high-confidence or unique alleles. You do not need a complete set of all alleles to calculate this QC heuristic.

[ENCFF354LGE]:https://www.encodeproject.org/files/ENCFF354LGE/
[ENCFF000QXV]:https://www.encodeproject.org/files/ENCFF000QXV/
[yeast-vcf-ref]:https://github.com/CEGRcode/GenoPipe/tree/master/StrainID/sacCer3_VCF
[human-vcf-ref]:https://github.com/CEGRcode/GenoPipe/tree/master/StrainID/hg19_VCF

[vcf-specs]:https://genome.ucsc.edu/goldenPath/help/vcf.html

[read-output]:/docs/strainid#output-report--o
