---
id: strainid
title: Usage
sidebar_label: Usage
slug: /StrainID/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<!-- [strainid-icon]:../static/genopipe-img/strainid-icon.png -->

__StrainID compares a database of VCF files against an aligned BAM file to check for the presence of SNPs in order to determine a likely cell line/strain used in the experiment.__


![Figure1C](/genopipe-img/figure1c.png)

```bash
bash identify-Strain.sh -i /path/to/BAM -g /path/to/genome/fASTA -v /path/to/VCF/files -o /path/to/output [ -s intSeed (default=None) ]
eg: bash identify-Strain.sh -i /input -g /sacCer3.fa -v /sacCer3_VCF -o /output -s 5
```

### Dependencies
The following dependencies are needed to run StrainID.

* [Python v3.7+][dependency-python]
  * [Pysam][dependency-pysam]
* [Samtools v1.7+][dependency-samtools]
* [wget][dependency-wget]

<Tabs>
  <TabItem value="conda-install" label="Anaconda" default>

You can install these dependencies as a [conda environment][conda-install] if you have conda setup on your machine using the following command:
```
conda create -n strainid-env -c bioconda -c conda-forge scipy pysam wget samtools
```

...and then turn on the environment with:
```
conda activate strainid-env
```

  </TabItem>
  <TabItem value="singularity-install" label="Singularity" default>

*Definition files coming soon*

  </TabItem>

</Tabs>

[conda-install]:https://docs.conda.io/projects/conda/en/latest/user-guide/install/download.html

[dependency-pysam]:https://pysam.readthedocs.io/en/latest/installation.html
[dependency-python]:https://www.python.org/downloads/
[dependency-samtools]:http://www.htslib.org/doc/
[dependency-wget]:https://www.gnu.org/software/wget/
