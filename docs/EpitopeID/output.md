---
id: output
title: ''
sidebar_label: Output Files (-o)
---

## Output Report (`-o`)

The output report is saved to the user-provided output directory in a file named based on the input FASTQ files (`/path/to/output/XXXXX_R1-ID.tab`).

### Example 1
Below is a sample report based on the results from running EpitopeID on the [ENCFF415CJF][ENCFF415CJF] sample from ENCODE.

```
EpitopeID	EpitopeCount
LAP-tag	435

GeneID	EpitopeID	EpitopeLocation	EpitopeCount	pVal
NR4A1|chr12:52416616-52453291	LAP-tag	C-term	9	3.580493355965414e-24
```

The first part of the report shows which epitopes in `Tag_DB` were identified in the sample (**EpitopeID column**) and how many reads mapped to this epitope (**EpitopeCount**) to help quantify the coverage of the epitopes which relates to the confidence of the call.

The second part of the report shows which epitopes localized to which regions/tiles of the genome significantly (sorted by pvalue if multiple hits). The columns specify the coordinate interval (**GeneID**), which epitope maps to this locus (**EpitopeID**), if this occurs on the N or C-terminus (**EpitopeLocation**), the number of reads mapping to this tile (**EpitopeCount**), and the poisson-calculated associated p-value to indicate confidence of the site (**pVal**).

In this report there were 435 reads that mapped to the LAP-tag epitope. The high read count supports "the epitope was successfully integrated into the sample.""

In this report there were 9 read pairs that spanned both the LAP-tag and the NR4A1 gene(at genomic locus chr12:52416616-52453291) toward the sequence encoding the C-terminus. This entry supports that the LAP-tag epitope was integrated at the C-terminus of NF4A1.

[ENCFF415CJF]:https://www.encodeproject.org/files/ENCFF415CJF/
