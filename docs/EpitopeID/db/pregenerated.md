---
id: pregenerated
title: ''
sidebar_label: Pregenerated database
---

## Pregenerated databases

For EpitopeID, this is the "database" or directory with four types of reference files used by `identify-Epitope.sh`. You will notice that EpitopeID provides reference files for both yeast (`sacCer3_EpiID`) and human (`hg19_EpiID`) so you can quickly get started without building up the database from scratch. However, you are free to customize and build your own set of files (e.g. add different epitope tags to check for, use a different genome build).

:::note
The provided database files are missing the genomic reference file for storage reasons. You will need to follow the directions below to download `genome.fa` before running EpitopeID if you are planning to use the provided defaults.
:::

### sacCer3_EpiID

| Epitope | Notes |
| :--------------: | :-----------: |
| AID |  |
| CBP |  |
| Extended-Tap | Used by Rossi et al. (2021) |
| FLAG-3x |  |
| FRB |  |
| GFP |  |
| HA_v1 |  |
| HA_v2 |  |
| HA_v3 |  |
| HaloTag |  |
| MNase_v2 |  |
| Myc-3x |  |
| ProteinA |  |


### hg19_EpiID

| Epitope | Notes |
| :--------------: | :-----------: |
| LAP-tag | Communication with Dr. Kevin White<br/>(UChicago, ENCODE) |

### hg19_EpiID_v2

| Epitope | Notes |
| :--------------: | :-----------: |
| LAP-tag | Communication with Dr. Kevin White<br/>(UChicago, ENCODE) |
| FKBP12-V | dTAG from Nabet et al (2018)<br/>[AddGene-91797][addgene-fkbp12v], start to stop codon |
| 3xFLAG   | Communication with the lab of Dr. Richard Myers<br/>(Hudson Alpha, ENCODE) |
| HaloTag |  |


## Downloading genome reference
If you already have the genome, you may use that. The scripts below are provided for convenience. Just note the chromosomes use in the annotations for the blacklist files match with your genome build if you opt to use your own.

### Downloading yeast `genome.fa`
Use the utility scripts by following the commands below to download the sacCer3 genome and format the chromosome names. The reference files are based on the arabic numeral chromosome naming system (i.e. "chr1", "chr2",..."chr16","chrM","2-micron").

```bash
cd /path/to/GenoPipe/EpitopeID/utility_scripts/genome_data
bash download_sacCer3_Genome.sh
mv genome.fa /path/to/sacCer3_EpiID/FASTA_genome/
```

### Downloading human `genome.fa`
Use the utility scripts by following the commands below to download the hg19 genome and move it to the appropriate directory.

```bash
cd /path/to/GenoPipe/EpitopeID/utility_scripts/genome_data
bash download_hg19_Genome.sh
mv genome.fa /path/to/hg19_EpiID/FASTA_genome/genome.fa
```

[addgene-fkbp12v]:https://www.addgene.org/browse/sequence/197293/
