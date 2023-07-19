---
id: threshold
title: ''
sidebar_label: Threshold (-p)
---

# Threshold (-p)

This optional input is used to specify the threshold for a localization hit to be included in the report. Defaults to 0.05.

Recall from the manuscript that a p-value is assigned to each genomic bin tiled across the entire genome. This p-value is calculated from the set of all read pairs with one read mapping to an epitope sequence AND the other read mapping to anywhere in the genome. The total number of these read pairs over the total number of bins is the probability used for a Poisson-based p-value calculation for the number of reads in each bin.
