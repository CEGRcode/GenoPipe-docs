---
id: deletionid
title: Usage
sidebar_label: Usage
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- [deletionid-icon]:../static/genopipe-img/deletionid-icon.png -->

__DeletionID identifies significant depletions of aligned NGS tags in the genome relative to a background model. This tool is set-up to confirm full gene knockouts.__

![Figure1B](/genopipe-img/figure1b.png)

```bash
bash identify-Deletion.sh -i /path/to/BAM -o /path/to/output -d /path/to/genome/database
eg: bash identify-Deletion.sh -i /input -o /output -d /sacCer3_Del
```

### Dependencies
The following dependencies are needed to run DeletionID.

* [Bedtools v2.26+][dependency-bedtools]
* [BWA v0.7.14+][dependency-bwa]
* [Perl5][dependency-perl5]
* [Python v3.7+][dependency-python]
  * [Numpy][dependency-numpy]
  * [Pysam][dependency-pysam]
* [Samtools v1.7+][dependency-samtools]

:::note
BedTools, BWA, and Perl are dependencies used by the utility scripts and are only needed for generating custom reference files. If you are working with the pregenerated set, you only need numpy, pysam, and samtools to
:::


<Tabs>
  <TabItem value="conda-install" label="Anaconda" default>

You can install these dependencies as a [conda environment][conda-install] if you have conda setup on your machine using the following command:
```
conda create -n deletionid-env -c bioconda -c conda-forge bedtools bwa perl numpy pysam samtools
```

...and then turn on the environment with:
```
conda activate deletionid-env
```

  </TabItem>
  <TabItem value="singularity-install" label="Singularity" default>

*Definition files coming soon*

  </TabItem>

</Tabs>

[conda-install]:https://docs.conda.io/projects/conda/en/latest/user-guide/install/download.html

[dependency-bedtools]:https://bedtools.readthedocs.io/en/latest/content/installation.html
[dependency-bwa]:https://bio-bwa.sourceforge.net/bwa.shtml
[dependency-numpy]:https://numpy.org/install/
[dependency-perl5]:https://www.perl.org/get.html
[dependency-pysam]:https://pysam.readthedocs.io/en/latest/installation.html
[dependency-python]:https://www.python.org/downloads/
[dependency-samtools]:http://www.htslib.org/doc/
