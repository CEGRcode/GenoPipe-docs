---
id: input
title: ''
sidebar_label: Input Files (-i)
---

## Input (`-i`)

EpitopeID takes [gzipped][gzip-man] FASTQ files from single-end(SE) or paired-end(PE) datasets to run. If your FASTQ files are not already compressed, you can zip them yourself if gzip is installed:

```bash
gzip XXXXX_R1.fastq
```

It is expected that at least one file for each sample (even for single-end data) follows the naming convention of `XXXXX_R1*.fastq.gz` and a second file if the data is paired-end following `XXXXX_R2*.fastq.gz`. This is based on the Illumina naming standard.

:::caution
Make sure none of the sample names used in the filenames have an occurrence of `_R1` outside of the read-specifying term to avoid confusion for EpitopeID when it is determining which samples have a read2 file.

For example, samples named like this will cause confusion:<br/>
❌ `Sample_R13A_R1.fastq.gz`

Alternatively try:<br/>
✅ `Sample-R13A_R1.fastq.gz`<br/>
✅ `SampleR13A_R1.fastq.gz`
:::

### Using published data downloaded from SRA
If you obtained data from SRA using sra-tools, the FASTQ files may have the read id printed in the FASTQ header like this:
```
@SRR518875.1.1 HWUSI-EAS1634_0079_FC:4:8:3267:1026 length=36
AAATCTTCTGTCTTTTGCTTTTGGACTCCATTCGTC
+SRR518875.1.1 HWUSI-EAS1634_0079_FC:4:8:3267:1026 length=36
????????????????????????????????????
```

...when EpitopeID requires the FASTQ quality score header not include the read id.

Currently EpitopeID does not support this format so you will need to reformat the FASTQ files. Below is an example of how to reformat each R1/R2 file for EpitopeID using `SRR10054430` as an example:
```
# Reformat quality score header and strip SRA read id to use raw read id to original sequencer-determined id
# unzip | reformat with sed | zip > output
gunzip -dc SRR518875_1.fastq.gz | sed 's/+.*/+/g; s/\@SRR[0-9]\{7\}\.[0-9]\+ /\@/g' | gzip -c > SRR518875_R1.fastq.gz
gunzip -dc SRR518875_2.fastq.gz | sed 's/+.*/+/g; s/\@SRR[0-9]\{7\}\.[0-9]\+ /\@/g' | gzip -c > SRR518875_R2.fastq.gz
```

...and your FASTQ files should look something like this:
```
@SRR518875.1.1 HWUSI-EAS1634_0079_FC:4:8:3267:1026 length=36
AAATCTTCTGTCTTTTGCTTTTGGACTCCATTCGTC
+
????????????????????????????????????
```


[gzip-man]:https://www.gnu.org/software/gzip/manual/gzip.html
