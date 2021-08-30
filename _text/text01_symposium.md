---
title: Text 1 Symposium
layout: default
description: Text 1,2,3-gram analysis of full text of Symposium (translated by Sir Walter Rangeley Maitland Lamb. (1882-1961))
shorttitle: "1 Symposium"
---
{% include menu.html %}

**Full text of Symposium**

Raw Text: <a href="../rawtext/text01_symposium.txt"> {{ page.title }} </a>

Text acquired from: Perseus Digital Library (<a href="http://www.perseus.tufts.edu/hopper/text?doc=Perseus%3atext%3a1999.01.0174%3atext%3dSym."> Link </a>)


**N-gram analysis** Full Data (in TSV): <a href="../tsv/text01_symposium_result.tsv"> here </a>

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
{% for onegram in site.data.text01_symposium_result %}
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
<sup>1</sup> Number of the word / total number of words * 100%
