---
id: example-runs
title: ''
sidebar_label: Execution Examples
---

# ENCODE sample run (hg19_VCF)
Download [ENCFF354LGE][ENCFF354LGE] and run StrainID.

```
WRK=`pwd`
mkdir Output-StrainID
mkdir BAM
wget https://www.encodeproject.org/files/ENCFF354LGE/@@download/ENCFF354LGE.bam
mv ENCFF354LGE.bam BAM/

git clone https://github.com/CEGRcode/GenoPipe.git
cd GenoPipe/StrainID
bash identify-Strain.sh -i $WRK/BAM/ -o $WRK/Output-StrainID -d $WRK/GenoPipe/StrainID/hg19_VCF
```

[ENCFF354LGE]:https://www.encodeproject.org/files/ENCFF354LGE/
