---
id: deletionid
title: Usage
sidebar_label: Usage
---

<!-- [deletionid-icon]:../static/genopipe-img/deletionid-icon.png -->

__DeletionID identifies significant depletions of aligned NGS tags in the genome relative to a background model. This tool is set-up to confirm full gene knockouts.__

![Figure1B](/genopipe-img/figure1b.png)

```bash
bash identify-Deletion.sh -i /path/to/BAM -o /path/to/output -d /path/to/genome/database
eg: bash identify-Deletion.sh -i /input -o /output -d /sacCer3_Del
```
