---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
---

These are quick setup instructions for running each of the GenoPipe modules "out-of-the-box" using the provided pre-generated sacCer3 and hg19 reference files. For more details on customizations or reading reports, check out the module-specific pages ([EpitopeID][epitopeid-md], [DeletionID][deletionid-md], and [StrainID][strainid-md])

## Download & Dependencies

To download GenoPipe, you can clone the repository or directly download the code. No builds needed.
```
# Download GenoPipe
cd /User/joeschmoe/Desktop
git clone https://github.com/CEGRcode/GenoPipe.git
```

Make sure all **dependencies** are installed by referenceing each module's dependency guide:
- [EpitopeID dependencies][epitopeid-dependencies]
- [StrainID dependencies][strainid-dependencies]
- [DeletionID dependencies][deletionid-dependencies]

You could create a conda environment of all the dependencies together:
```
conda create -n genopipe-env -c bioconda -c conda-forge bedtools bowtie2 bwa perl numpy scipy pysam wget samtools
```

## ENCODE example (human)

Say we performed some K562 ChIP-seq for an eGFP epitope-tagged strain and we want to validate that the cell line background is K562 (StrainID) and that the epitope correctly targeted the DDX20 gene (EpitopeID). For this exercise, we will be pulling data files from the ENCODE experiment [ENCSR978IXJ][ENCSR978IXJ] including the raw FASTQ files and the BAM files downstream in the processing pipeline.

### Get data & set-up GenoPipe
For this example, we are working from the `/User/joeschmoe/Desktop` directory on some Linux/MacOS machine. Run the following code to set-up your input/output directories and download data from ENCODE.

```
# Make input directories
[ -d hg19_FASTQ ] || mkdir hg19_FASTQ
[ -d hg19_BAM ] || mkdir hg19_BAM

# Download hg19 eGFP tagged strain test files
wget -c https://www.encodeproject.org/files/ENCFF467ZVS/@@download/ENCFF467ZVS.fastq.gz -O hg19_FASTQ/ENCSR978IXJ_R1.fastq.gz
wget -c https://www.encodeproject.org/files/ENCFF969JRS/@@download/ENCFF969JRS.fastq.gz -O hg19_FASTQ/ENCSR978IXJ_R2.fastq.gz

# Download hg19 ENCODE-CellLines test files
wget -c https://www.encodeproject.org/files/ENCFF548ERH/@@download/ENCFF548ERH.bam -O hg19_BAM/ENCSR978IXJ.bam

# Make output directories
[ -d hg19_epitopeid_reports ] || mkdir hg19_epitopeid_reports
[ -d hg19_strainid_reports ] || mkdir hg19_strainid_reports

# Download hg19 genome & move it to EpiID db directory
cd GenoPipe/EpitopeID/utility_scripts/genome_data
bash download_hg19_Genome.sh
mv genome.fa* ../../hg19_EpiID/FASTA_genome/
```

### Run EpitopeID
Execute the shell script to run EpitopeID - make sure to use absolute paths
```
cd /User/joeschmoe/Desktop/GenoPipe/EpitopeID
bash identify-Epitope.sh -t 4 \
  -i /User/joeschmoe/Desktop/hg19_FASTQ \
  -d /User/joeschmoe/Desktop/GenoPipe/EpitopeID/hg19_EpiID \
  -o /User/joeschmoe/Desktop/hg19_epitopeid_reports
```

Your output should look something like this
```
EpitopeID	EpitopeCount
LAP-tag 48

GeneID	EpitopeID	EpitopeLocation	EpitopeCount	pVal
DDX20|chr1:112298190-112310199	LAP-tag	C-term	5	5.582970412927705e-20
```

### Run StrainID
Execute the shell script to run StrainID - make sure to use absolute paths
```
cd /User/joeschmoe/Desktop/GenoPipe/StrainID
bash identify-Strain.sh \
  -i /User/joeschmoe/Desktop/hg19_BAM \
  -g /User/joeschmoe/Desktop/GenoPipe/EpitopeID/hg19_EpiID/FASTA_genome/genome.fa \
  -v /User/joeschmoe/Desktop/GenoPipe/StrainID/hg19_VCF \
  -o /User/joeschmoe/Desktop/hg19_strainid_reports \
```

Your output should look something like this
```
	ENCFF548ERH.bam
A549.vcf	-3.231404275463283
HCT116.vcf	-2.1269379376931563
HELA.vcf	0.10841794080447699
HepG2.vcf	-0.5427718460680672
K562.vcf	5.683476830951074
LnCap.vcf	-2.342453230210475
MCF7.vcf	NaN
SKnSH.vcf	-1.481786644732225
```

### Final Directory Structure

Your directory structure after running the above should look like:
```
/User/joeschmoe/Desktop
  |--GenoPipe
  |  |--EpitopeID
  |  |  |--...
  |  |--DeletionID
  |  |  |--...
  |  |--StrainID
  |  |  |--...
  |--hg19_FASTQ
  |  |--ENCSR978IXJ_R1.fastq.gz
  |  |--ENCSR978IXJ_R2.fastq.gz
  |--hg19_BAM
  |  |--ENCSR978IXJ.bam
  |--hg19_epitopeid_reports
  |  |--ENCSR978IXJ_R1-ID.tab
  |--hg19_strainid_reports
     |--ENCSR978IXJ_strain.tab
```


## ChIP-exo example (yeast)

Say we performed some ChIP-exo for an TAP epitope-tagged strain and we want to validate that the background is BY4741 (StrainID) and that the yeast strain was constructed from a Leu2, Ura3, and Met17 whole-gene knockout background (DeletionID). For this exercise, we will be pulling BAM data files from the [Yeast Epigenome Project][yep-url].

### Get data & set-up GenoPipe
For this example, we are working from the `/User/joeschmoe/Desktop` directory on some Linux/MacOS machine. Run the following code to set-up your input/output directories and download data from ENCODE.

```
# Make input directories
[ -d sacCer3_BAM ] || mkdir sacCer3_BAM

# Download sacCer3 BAM files from The Yeast Epigenome Project
wget -c https://www.datacommons.psu.edu/download/eberly/pughlab/yeast-epigenome-project/12467_YEP.zip
unzip 12467_YEP.zip
mv 12467_YEP/12467_filtered.bam sacCer3_BAM/12467_Reb1_i5006_BY4741_-_YPD_-_XO_FilteredBAM.bam

# Make output directories
[ -d sacCer3_strainid_reports ] || mkdir sacCer3_strainid_reports
[ -d sacCer3_deletionid_reports ] || mkdir sacCer3_deletionid_reports

# Download sacCer3 genome & move it to EpiID db directory
cd GenoPipe/EpitopeID/utility_scripts/genome_data
bash download_sacCer3_Genome.sh
mv genome.fa* ../../sacCer3_EpiID/FASTA_genome/
```

### Run StrainID
Execute the shell script to run StrainID - make sure to use absolute paths
```
cd /User/joeschmoe/Desktop/GenoPipe/StrainID
bash identify-Strain.sh \
  -i /User/joeschmoe/Desktop/sacCer3_BAM \
  -g /User/joeschmoe/Desktop/GenoPipe/EpitopeID/sacCer3_EpiID/FASTA_genome/genome.fa \
  -v /User/joeschmoe/Desktop/GenoPipe/StrainID/sacCer3_VCF \
  -o /User/joeschmoe/Desktop/sacCer3_strainid_reports \
```

Your output should look something like this:
```
	12467_Reb1_i5006_BY4741_-_YPD_-_XO_FilteredBAM.bam
BY4741.gatk.vcf	3.740238715171018
BY4742.gatk.vcf	1.0276164735202507
CEN.PK2-1Ca.gatk.vcf	-1.5516470878685054
D273-10B.gatk.vcf	-1.596023423608337
FL100.gatk.vcf	-0.05547786250012817
JK9-3d.gatk.vcf	-1.2626920465354035
RM11-1A.gatk.vcf	-1.5472519963103177
SEY6210.gatk.vcf	1.233358965759852
Sigma1278b-10560-6B.gatk.vcf	-1.5683632971271528
W303.gatk.vcf	-0.8350038260150588
Y55.gatk.vcf	-2.254742786500095

```

### Run DeletionID

```
cd /User/joeschmoe/Desktop/GenoPipe/DeletionID
bash identify-Deletion.sh \
  -i /User/joeschmoe/Desktop/sacCer3_BAM \
  -d /User/joeschmoe/Desktop/GenoPipe/DeletionID/sacCer3_Del \
  -o /User/joeschmoe/Desktop/sacCer3_deletionid_reports
```

Your output should look something like this:
```
LEU2	No Data Detected
URA3	No Data Detected
MET17	No Data Detected
```

### Final Directory Structure

Your directory structure after running the above should look like:
```
/User/joeschmoe/Desktop
  |--GenoPipe
  |  |--EpitopeID
  |  |  |--...
  |  |--DeletionID
  |  |  |--...
  |  |--StrainID
  |  |  |--...
  |--sacCer3_BAM
  |  |--12467_Reb1_i5006_BY4741_-_YPD_-_XO_FilteredBAM.bam
  |--sacCer3_strainid_reports
  | |--12467_Reb1_i5006_BY4741_-_YPD_-_XO_FilteredBAM_strain.tab
  |--sacCer3_deletionid_reports
    |--12467_Reb1_i5006_BY4741_-_YPD_-_XO_FilteredBAM_deletion.tab
```


## More examples

To demonstrate the utility of EpitopeID in another practice exercise, you can try re-running EpitopeID after downloading the following FASTQ files. What do the reports suggest about these two samples from [ENCSR130PDE][ENCSR130PDE] and [ENCSR005NMT][ENCSR005NMT]?
```
# ENCODE's NR4A1-eGFP ChIP-seq
wget -c https://www.encodeproject.org/files/ENCFF671VDI/@@download/ENCFF671VDI.fastq.gz -O hg19_FASTQ/ENCFF671VDI_R1.fastq.gz
wget -c https://www.encodeproject.org/files/ENCFF301GRJ/@@download/ENCFF301GRJ.fastq.gz -O hg19_FASTQ/ENCFF671VDI_R2.fastq.gz

# ENCODE's ID3-eGFP ChIP-seq
wget -c https://www.encodeproject.org/files/ENCFF548RTA/@@download/ENCFF548RTA.fastq.gz -O hg19_FASTQ/ENCFF548RTA_R1.fastq.gz
wget -c https://www.encodeproject.org/files/ENCFF916QKA/@@download/ENCFF916QKA.fastq.gz -O hg19_FASTQ/ENCFF548RTA_R2.fastq.gz
```

To demonstrate the utility of StrainID in another practice exercise, you can try re-running StrainID after downloading the following BAM files. What do the reports suggest about these two samples that may have been generated in the same batch (from [ENCSR210RWL][ENCSR210RWL] and [ENCSR927XBT][ENCSR927XBT])?

```
# Two of ENCODE's shRNA knockdown RNA-seq datasets, both processed on 2016-04-14
# HepG2
wget -c https://www.encodeproject.org/files/ENCFF492NHB/@@download/ENCFF492NHB.bam -O hg19_BAM/ENCFF492NHB.bam
# K562
wget -c https://www.encodeproject.org/files/ENCFF745DNT/@@download/ENCFF745DNT.bam -O hg19_BAM/ENCFF745DNT.bam
```

[epitopeid-md]:/docs/EpitopeID/epitopeid
[deletionid-md]:/docs/DeletionID/
[strainid-md]:/docs/StrainID
[epitopeid-dependencies]:/docs/EpitopeID/#dependencies
[strainid-dependencies]:/docs/StrainID/#dependencies
[deletionid-dependencies]:/docs/DeletionID/#dependencies

[ENCSR978IXJ]:https://www.encodeproject.org/experiments/ENCSR978IXJ/
[ENCSR130PDE]:https://www.encodeproject.org/experiments/ENCSR130PDE/
[ENCSR005NMT]:https://www.encodeproject.org/experiments/ENCSR005NMT/
[ENCSR210RWL]:https://www.encodeproject.org/experiments/ENCSR210RWL/
[ENCSR927XBT]:https://www.encodeproject.org/experiments/ENCSR927XBT/
[yep-url]:http://www.yeastepigenome.org/
