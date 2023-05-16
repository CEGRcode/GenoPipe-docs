---
id: quick-start
title: Quick Start
sidebar_label: Quick Start
---

These are quick setup instructions for running each of the GenoPipe modules out-of-the-box using the provided sacCer3 and hg19 reference files. For more details on customizations or reading reports, check out the module-specific pages ([EpitopeID][epitopeid], [DeletionID][deletionid], and [StrainID][strainid])

## Set-up instructions (all modules)
To download GenoPipe, you can clone the repository. No builds needed.
```
git clone www.github/CEGRcode/GenoPipe
WRK=`pwd`  # Save current working directory path to env variable
```
Make sure all [dependencies are installed][dependencies].

### Joe Schmoe Example
```
# Download GenoPipe
cd /User/joeschmoe/Desktop/
git clone GenoPipe
```

The final directory structure after running all of the Joe Schmoe examples below should look something like this:
```
/User/joeschmoe/Desktop
  |--GenoPipe
  |  |--EpitopeID
  |  |  |--...
  |  |--DeletionID
  |  |  |--...
  |  |--StrainID
  |  |  |--...
  |  |--sacCer3.fa
  |--myfastq
  |  |--SampleA_R1.fastq.gz
  |  |--SampleB_R1.fastq.gz
  |  |--SampleB_R2.fastq.gz
  |--mybam
  |  |--SampleA.bam
  |  |--SampleB.bam
  |--myreports_EID
  |  |--SampleA_R1-ID.tab
  |  |--SampleB_R1-ID.tab
  |--myreports_DID
  |  |--SampleA_deletion.tab
  |  |--SampleB_deletion.tab
  |--myreports_SID
     |--SampleA_strain.tab
     |--SampleB_strain.tab
```




## EpitopeID

Let's say you cloned GenoPipe into your working directory where there is another directory that includes all the raw FASTQ inputs.

<!-- ```
/path/to/working/directory/
|--myfastq
|  |--sampleA_R1.fastq.gz
|  |--sampleA_R2.fastq.gz
|  |--sampleB_R1.fastq.gz
|  |--sampleB_R2.fastq.gz
|--myreports_EID
   |--<empty>
|--GenoPipe/
   |--EpitopeID/
      |--identify_Epitope.sh
      |--utility_scripts/
         |--genome_data/
            |--download_sacCer3_Genome.sh
            |--download_hg19_Genome.sh
      ...
   ...
``` -->

### 1. Check FASTQ filenames
EpitopeID takes gzipped FASTQ files as input. The file name should end with a `_R1` or `_R2` and use the extension `fastq.gz` (the standard naming convention of Illumina libraries).

### 2. Download genome
The following instructions are for setting up the database of reference files used by EpitopeID using the provided genome builds and epitope tag sequences. To customize your database, see the [full documentation][epitopeid].

For downloading yeast genome...
```
cd $WRK/GenoPipe/EpitopeID/utility_scripts/genome_data/
bash download_sacCer3_Genome.sh
mv genome.fa ../../sacCer3_EpiID/FASTA_genome/
```

For downloading human genome...
```
cd $WRK/GenoPipe/EpitopeID/utility_scripts/genome_data/
bash download_hg19_Genome.sh
mv genome.fa ../../sacCer3_EpiID/FASTA_genome/
```

### 3. Run EpitopeID
When providing path locations, it is important that you provide **absolute paths** (i.e. path should start with `/` or `~/`).

For yeast (sacCer3) samples...
```
cd GenoPipe/EpitopeID
bash identify-Epitope.sh -i /path/to/FASTQ -o /path/to/output -d /path/to/GenoPipe/EpitopeID/sacCer3_EpiID
```

For human (hg19) samples...
```
cd GenoPipe/EpitopeID
bash identify-Epitope.sh -i /path/to/FASTQ -o /path/to/output -d /path/to/GenoPipe/EpitopeID/hg19_EpiID
```

### Joe Schmoe Example

In the following example, GenoPipe, the directory including all the input yeast FASTQ files, and the new directory for storing EpitopeID reports are stored on the Desktop of Joe Schmoe. Filepaths would need to be changed according to a user's preferred directory structure.

```
# Download Genomic FASTA and move to appropriate directory
cd /User/joeschmoe/Desktop/GenoPipe/EpitopeID/utility_scripts/genome_data/
bash download_sacCer3_Genome.sh
mv genome.fa* ../../sacCer3_EpiID/FASTA_genome/
cd ../../
mkdir ../../myreports_EID
# Run EpitopeID
bash identify-Epitope.sh -i /User/joeschmoe/Desktop/myfastq -o /User/joeschmoe/Desktop/myreports_EID -d /User/joeschmoe/Desktop/GenoPipe/EpitopeID/sacCer3_EpiID
```


## DeletionID

### 1. Align FASTQ input files
DeletionID uses BAM files as its input. Make sure that the reads are aligned to sacCer3 if you are using the default interval database. Any aligner that outputs standard BAM format can be used to generate the BAM input. DeletionID was tested on BAM files built using [BWA-MEM](http://bio-bwa.sourceforge.net/bwa.shtml).

### 2. Run DeletionID
For yeast (sacCer3) samples...
```
cd GenoPipe/DeletionID
bash identify-Deletion.sh -i /path/to/BAM -o /path/to/output -d /path/to/GenoPipe/DeletionID/sacCer3_Del
```

### Joe Schmoe Example
In the following example, GenoPipe, the directory including all the input yeast BAM files, and the new directory for storing DeletionID reports are stored on the Desktop of Joe Schmoe. Filepaths would need to be changed according to a user's preferred directory structure.

```
cd /User/joeschmoe/Desktop/GenoPipe/DeletionID
mkdir ../../myreports_DID
# Run DeletionID
bash identify-Deletion.sh -i /User/joeschmoe/Desktop/mybam -o /User/joeschmoe/Desktop/myreports_DID -d /User/joeschmoe/Desktop/GenoPipe/DeletionID/sacCer3_Del
```

## StrainID

### 1. Align FASTQ input files
StrainID uses BAM files as its input. Make sure that the reads are aligned to the appropriate sacCer3 or hg19 genome build if you are using the default interval database. Any aligner that outputs standard BAM format can be used to generate the BAM input. StrainID was tested on [BWA-MEM](http://bio-bwa.sourceforge.net/bwa.shtml).

### 2. Run StrainID
For yeast (sacCer3) samples...

```
cd GenoPipe/StrainID
bash identify-Strain.sh -i /path/to/BAM -o /path/to/output -g /path/to/sacCer3.fa -v /path/to/GenoPipe/StrainID/sacCer3_VCF
```

For human (hg19) samples...

```
cd GenoPipe/StrainID
bash identify-Strain.sh -i /path/to/BAM -o /path/to/output -g /path/to/hg19.fa -v /path/to/GenoPipe/StrainID/hg19_VCF
```

### Joe Schmoe Example
In the following example, GenoPipe, the directory including all the input yeast BAM files, and the new directory for storing DeletionID reports are stored on the Desktop of Joe Schmoe. Filepaths would need to be changed according to a user's preferred directory structure.

```
cd /User/joeschmoe/Desktop/GenoPipe/
cd EpitopeID/utility_scripts/genome_data
bash download_sacCer3_Genome.sh
mv genome.fa /User/joeschmoe/Desktop/GenoPipe/sacCer3.fa
cd ../../../StrainID
mkdir ../../myreports_SID
# Run StrainID
bash identify-Strain.sh -i /User/joeschmoe/Desktop/mybam -o /User/joeschmoe/Desktop/myreports_SID -g /User/joeschmoe/Desktop/GenoPipe/sacCer3.fa -v /User/joeschmoe/Desktop/GenoPipe/StrainID/sacCer3_VCF
```

[dependencies]:/docs/welcome#dependencies
[epitopeid-md]:/docs/EpitopeID/epitopeid
[deletionid-md]:/docs/DeletionID/
[strainid-md]:/docs/StrainID
