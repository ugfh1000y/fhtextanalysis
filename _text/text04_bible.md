---
title: Text 4 Bible
layout: default
description: Text 1,2,3-gram analysis of ch 1-3 of Genesis and full book of Gospel of Mark (ESV translation)
shorttitle: "4 Bible"
---

**Bible Genesis and Mark**

{% include menu.html %}


Raw Text: <a href="../rawtext/text04a_genesis_1to3.txt"> {{ page.title }} Gen 1-3 </a>
Raw Text: <a href="../rawtext/text04b_mark_1to16.txt"> {{ page.title }} Mark </a>

Text acquired from: Bible Gateway (<a href="https://www.biblegateway.com/passage/?search=Genesis%201&version=ESV"> Link </a>)


Genesis
**N-gram analysis** Full Data (in TSV): <a href="../tsv/text04a_genesis_1to3.tsv"> here </a>

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
{% for onegram in site.data.text04a_genesis_1to3_result %}
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

---
**Mark**
**N-gram analysis** Full Data (in TSV): <a href="../tsv/text04b_mark_1to16_result.tsv"> here </a>

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
{% for onegram in site.data.text04b_mark_1to16_result %}
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
