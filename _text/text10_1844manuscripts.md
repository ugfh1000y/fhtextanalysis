---
title: Text 10 1844 Manuscripts
layout: default
description: Text 1,2,3-gram analysis of 1844 manuscripts chapter on "Wages of Labour" and "Estranged Labour" (translated by Martin Milligan)
shorttitle: "10 1844"
---

**1844 Manuscripts - *Wages of Labour* & *Estranged Labour***
{% include menu.html %}


Raw Text: <a href="../rawtext/text10_1844_manuscript_wage_estranged.txt"> {{ page.title }} </a>

Text acquired from: marxists.org (<a href="https://www.marxists.org/archive/marx/works/1844/manuscripts/preface.htm"> Link </a>)



**N-gram analysis** Full Data (in TSV): <a href="../tsv/text10_1844_manuscript_wage_estranged_result.tsv"> here </a>

<table>
<colgroup>
<col width="100 px" />
<col width="100 px" />
<col width="100 px" />
<col width="100 px" />

<col width="100 px" />
<col width="100 px" />
<col width="100 px" />

<col width="100 px" />
<col width="100 px" />
<col width="100 px" />

</colgroup>
<thead>
<tr class="header">
<th>Rank</th>
<th>1-gram</th>
<th>Number</th>
<th>Freq(%)<sup>1</sup></th>
<th>2-gram</th>
<th>Number</th>
<th>Freq(%)<sup>1</sup></th>
<th>3-gram</th>
<th>Number</th>
<th>Freq(%)<sup>1</sup></th>

</tr>
</thead>
<tbody>
{% for onegram in site.data.text10_1844_manuscript_wage_estranged_result %}
  {% assign id = onegram.id | plus: 0 %}
  {% if id <= 200 %}
  <tr>
    <td markdown="span">{{ id }}</td>
    <td markdown="span">{{ onegram.1gram }}</td>
    <td markdown="span">{{ onegram.1freq }}</td>
    <td markdown="span">{{ onegram.1freqratio }} </td>
    <td markdown="span">{{ onegram.2gram }}</td>
    <td markdown="span">{{ onegram.2freq }}</td>
    <td markdown="span">{{ onegram.2freqratio }} </td>
    <td markdown="span">{{ onegram.3gram }}</td>
    <td markdown="span">{{ onegram.3freq }}</td>
    <td markdown="span">{{ onegram.3freqratio }} </td>
  </tr>
  {% endif %}
{% endfor %}
</tbody>
</table>
<sup>1</sup> Number of the word / total number of word * 100%
