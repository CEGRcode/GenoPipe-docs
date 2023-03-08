---
id: welcome
title: Welcome
sidebar_label: Welcome
---
Welcome to the GenoPipe wiki!

<img src={require('/../static/genopipe-img/Figure1.png').default} style={{padding:'5% 20% 5%'}} />


GenoPipe is a tool with three modules that check for different aspects of strain background in Next Generation Sequencing(NGS) datasets. Each module tests for a different aspect of strain background: epitope insertions, deletions, and cell line/variant-based background.
  - [EpitopeID][epitopeid-md] identifies and determines the genomic location of epitopes or other inserted sequences relative to genomic loci.
  - [DeletionID][epitopeid-md] identifies significant depletions of aligned NGS tags in the genome relative to a background model. This tool is set-up to confirm gene knockouts.
  - [StrainID][strainid-md] compares a database of VCF files against an aligned BAM file to check for the presence of SNPs in order to determine a likely cell line/strain used in the experiment.

This is a great QC tool for your data fresh off the sequencer or for checking old published datasets when you can't find a record of the strain background used. These modules work for data from a variety of genomic sequencing assays, not just whole-genome sequencing (WGS) and can be customized to organisms other than yeast and human. Please check the docs and FAQs of the module you're interested in before starting. Confirm that your dataset and reference files are appropriate to use with the module.


## Setup

### Dependencies
The following dependencies are required to run all GenoPipe modules. If you are interested in just one of the modules, you may install just the tools used by the module of interest. "DeletionID-optional" refers to tools needed only if you plan to customize your reference files. These are not required if you run DeletionID out-of-the-box with the provided `sacCer3_Del` database.

* [Bedtools v2.26+][dependency-bedtools] (EpitopeID)
* [Bowtie v2.2.5+][dependency-bowtie2] (EpitopeID)
* [BWA v0.7.14+][dependency-bwa] (DeletionID-customize)
* [GNU grep][dependency-gnu-grep] (EpitopeID)
* [Perl5][dependency-perl5] (EpitopeID, DeletionID-customize)
* [Python v3.7+][dependency-python] (EpitopeID, DeletionID, StrainID)
  * [Numpy][dependency-numpy] (DeletionID)
  * [Pysam][dependency-pysam] (DeletionID, StrainID)
  * [Scipy][dependency-scipy] (EpitopeID)
* [Samtools v1.7+][dependency-samtools] (EpitopeID, DeletionID, StrainID)
* [wget][dependency-wget] (EpitopeID utility scripts for downloading genomes)

You can install most of these dependencies as a [conda environment][conda-install] if you have conda setup on your machine using the following command:

```bash
conda create -n my-genopipe-env -c conda-forge -c bioconda bedtools bowtie2 bwa grep perl numpy scipy pysam wget
```

...and then just make sure your conda environment is activated:
```
conda activate my-genopipe-env
```

### Download

```bash
git clone https://github.com/CEGRcode/GenoPipe
cd GenoPipe
```

<!-- ## Testing -->

## Genome Builds
General notes about the defaults used for out-of-the-box usage:

* Yeast (sacCer3) and human (hg19) genome builds supported
* Helper scripts for downloading reference genome sequence (FASTA) described in [EpitopeID guide][epitopeid-md]
  * sacCer3 genome download + scripts to rename chromosome identifiers to arabic numeral system
  * hg19 genome download
* Each module's database coord systems are based off the above genome builds
  * BED annotations for EpitopeID `sacCer3_EpiID`and `hg19_EpiID`
  * VCFs for StrainID `sacCer_VCF` and `hg19_VCF`
  * BED coordinates for DeletionID in `sacCer_Del`



## File Format Standards

* BED Format -- used by DeletionID. See [specifications][bed-specs].
* Variant Call Format (VCF) -- used by StrainID. See [specifications][vcf-specs].



## Getting Help

* Check the specific module guides for a list of FAQs at the bottom. Pay attention to the tips and warnings
* For Bugs: please open an issue on [Github][github-issues] with the following info
    * command you ran with a description of the input files (_we may ask you for a copy of the input files later_)
    * Entire error message or a description of the problem
    * Software versions and OS you ran the command on

## Citing Us
If you use GenoPipe in your work, you can use the BioRxiv publication (Lang et al, 202X).


[epitopeid-md]:/docs/epitopeid
[deletionid-md]:/docs/deletionid
[strainid-md]:/docs/strainid

[github-repo]:https://github.com/CEGRcode/GenoPipe
[github-issues]:https://github.com/CEGRcode/GenoPipe/issues
[conda-install]:https://docs.conda.io/projects/conda/en/latest/user-guide/install/download.html

[bed-specs]:https://genome.ucsc.edu/FAQ/FAQformat.html#format1
[vcf-specs]:https://genome.ucsc.edu/goldenPath/help/vcf.html
[dependency-bwa]:https://bio-bwa.sourceforge.net/bwa.shtml
[dependency-bowtie2]:https://bowtie-bio.sourceforge.net/bowtie2/manual.shtml
[dependency-samtools]:http://www.htslib.org/doc/
[dependency-bedtools]:https://bedtools.readthedocs.io/en/latest/content/installation.html
[dependency-perl5]:https://www.perl.org/get.html
[dependency-python]:https://www.python.org/downloads/
[dependency-scipy]:https://scipy.org/install/
[dependency-numpy]:https://numpy.org/install/
[dependency-pysam]:https://pysam.readthedocs.io/en/latest/installation.html
[dependency-gnu-grep]:https://man7.org/linux/man-pages/man1/grep.1.html
[dependency-wget]:https://www.gnu.org/software/wget/

<!-- [biorxiv-paper]:https://www.biorxiv.org/ -->
