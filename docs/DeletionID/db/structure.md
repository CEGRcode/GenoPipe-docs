---
id: structure
title: ''
sidebar_label: Structure (DelDB)
---

## Reference Files (`-d`)

For DeletionID, this is the "database" or directory with all the reference files used by `identify-Deletion.sh`. DeletionID provides reference files for yeast (`sacCer3_Del`) so you can quickly get started without building up the database from scratch. However, you are free to customize the database by adding a different set of coordinate new mappability scores or by looking at a different set of coordinate intervals.

Whether you use the provided pregenerated reference files or create your own, the database should use the following directory structure both to ensure that DeletionID can find the correct reference files.

```
/name/of/delDB
|--genomic_coord
   |--coord.bed
|--mappability
   |--mappability.tab
```

Below is a list of the files that DeletionID looks for during execution and some information on the provided yeast defaults.

* The `coord.bed` is the file with the genomic coordinate intervals we are looking for depletions within.
* The `mappability.tab` is the file with the calculated mappability scores for each coordinate interval within the `coord.bed` file. This will need to be regenerated if you use a different `coord.bed` file from the one provided.


## sacCer3_Del

The provided `sacCer3_Del` uses the set of yeast gene coordinate intervals and will work for datasets




The next page includes more information on how to use the utility scripts to download and customize your reference files.
