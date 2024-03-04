---
id: faq
title: FAQ
sidebar_label: FAQ
---

#### Q: My epitope sequence isn't part of the sequences in the default provided reference files (either `sacCer3_EpiID` or `hg19_EpiID`). Can I still use EpitopeID for checking my samples?
  * Yes! Please scroll up to the [**Customizing annotations**][customize-annotations] section for directions on how to add your epitope sequence to the database.
#### Q: I added my own custom tag sequences to the `TagDB` directory but when I run EpitopeID, none of my samples are getting significant hits to the new tags.
  * There are a few things you should check before concluding that the epitope is not present in your sample:
    1. Did you recreate the `ALL_TAG.fa` file? Open it up to make sure your sequences are there. If they aren't there, follow the commands in the [**Customizing epitopes**][customize-epitopes] section above.
    2. Did you recreate the Bowtie2 index files for `ALL_TAG.fa`? Remove at least one of the Bowtie2 index files (e.g. `ALL_TAG.1.bt2`) and run EpitopeID. EpitopeID automatically recreates the index if any files are missing but it does not check that the index files match the FASTA sequence. If you modify the `ALL_TAG.fa` without recreating the BWA index files, EpitopeID will run on the old set of tag sequences.
#### Q: What does the N-term or C-term mean in the output?
  * For each gene, three bins are created for (1) the ORF interval, (2) a bin upstream of the start codon, (3) a bin downstream of the stop codon, each of which correspond to the gene, N-terminus, or C-terminus of the peptide chain gene product. If EpitopeID is mapping more strongly to the N or C-terminus, it is likely that the epitope is tagged to that side of the endogenous peptide chain.
  * Note: if the epitope sequence provided is not the protein-coding sense strand, then you should invert your interpretation of the report for which side of the endogenous peptide chain is tagged.
#### Q: I tried running EpitopeID on my samples using `sacCer3_EpiID`/`hg19_EpiID` and it is telling me that I am missing the `genomic.fa` file. Where can I find it?
  * Due to storage reasons, we do not include the genomic reference in the Github download for GenoPipe. However, we do provide scripts that will help you to download and format the reference genomes that we used. See "Downloading the sacCer3/hg19 genome".
  * Otherwise you can use your own genomic sequence. If you do, then remember to rename it to `genome.fa` and move it to the appropriate directory. Also make sure that the annotations you use are based on the same reference build.
#### Q: I ran EpitopeID on some samples I downloaded from SRA. Why is EpitopeID throwing an error?
  * EpitopeID currently does not support samples with read IDs in the FASTQ quality score header section. Please read more about [running EpitopeID on data from public repositories][published-sra]

[ensembl-ftp]:https://useast.ensembl.org/info/data/ftp/index.html
[ucsc-download]:https://hgdownload.soe.ucsc.edu/downloads.html

[published-sra]:/docs/EpitopeID/input#using-published-data-downloaded-from-sra
[download-sacCer3]:/docs/EpitopeID/db/pregenerated#downloading-the-saccer3-genome
[download-hg19]:/docs/EpitopeID/db/pregenerated#downloading-the-hg19-genome
[customize-annotations]:/docs/EpitopeID/db/custom-db#customizing-annotations
[customize-epitopes]:/docs/EpitopeID/db/custom-db#customizing-epitopes
