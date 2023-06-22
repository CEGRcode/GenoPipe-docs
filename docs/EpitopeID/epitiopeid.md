---
id: epitopeid
title: Usage
sidebar_label: Usage
slug: /EpitopeID/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- ![epitopeid-icon](/genopipe-img/epitopeid-icon.png)-->

__EpitopeID identifies and determines the genomic location of epitopes or other inserted sequences relative to genomic loci.__

![Figure1A](/genopipe-img/figure1a.png)


```bash
bash identify-Epitope.sh -i /path/to/FASTQ -o /path/to/output -d /path/to/genome/database [-t <Threads - Default 1>] [-p <Pvalue - Default 0.05>]
eg: bash identify-Epitope.sh -i /input -o /output -d /sacCer3_EpiID -t 2 -p 0.1
```

### Dependencies
The following dependencies are needed to run EptiopeID.
* [Bedtools v2.26+][dependency-bedtools]
* [Bowtie v2.2.5+][dependency-bowtie2]
* [GNU grep][dependency-gnu-grep]
* [Perl5][dependency-perl5]
* [Python v3.7+][dependency-python]
  * [Scipy][dependency-scipy]
* [Samtools v1.7+][dependency-samtools]
* [wget][dependency-wget]


<Tabs>
  <TabItem value="conda-install" label="Anaconda" default>

You can install these dependencies as a [conda environment][conda-install] if you have conda setup on your machine using the following command:
```
conda create -n epitopeid-env -c bioconda -c conda-forge bedtools bowtie2 perl scipy pysam wget grep samtools
```

...and then turn on the environment with:
```
conda activate epitopeid-env
```

  </TabItem>
  <TabItem value="singularity-install" label="Singularity" default>

*Definition files coming soon*

  </TabItem>

</Tabs>


[saccer3-tag-ref]:https://github.com/CEGRcode/GenoPipe/tree/master/EpitopeID/sacCer3_EpiID/FASTA_tag/Tag_DB
[hg19-tag-ref]:https://github.com/CEGRcode/GenoPipe/tree/master/EpitopeID/hg19_EpiID/FASTA_tag/Tag_DB

[customize-annotations]:/docs/epitopeid#customizing-annotations
[customize-epitopes]:/docs/epitopeid#customizing-epitopes

[download-sacCer3]:/docs/epitopeid#downloading-the-saccer3-genome
[download-hg19]:/docs/epitopeid#downloading-the-hg19-genome

[conda-install]:https://docs.conda.io/projects/conda/en/latest/user-guide/install/download.html

[dependency-bedtools]:https://bedtools.readthedocs.io/en/latest/content/installation.html
[dependency-bowtie2]:https://bowtie-bio.sourceforge.net/bowtie2/manual.shtml
[dependency-perl5]:https://www.perl.org/get.html
[dependency-python]:https://www.python.org/downloads/
[dependency-samtools]:http://www.htslib.org/doc/
[dependency-scipy]:https://scipy.org/install/
[dependency-gnu-grep]:https://man7.org/linux/man-pages/man1/grep.1.html
[dependency-wget]:https://www.gnu.org/software/wget/
