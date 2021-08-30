---
title: Text 3 Zhuangzi
layout: default
description:  Text 1,2,3-gram analysis of chapter 1,2,4,17 of Zhuangzi (Translated by Burton Watson)
shorttitle: "3 Zhuangzi"
---

**莊子－逍遙遊、齊物論、人間世、秋水（英譯）**

{% include menu.html %}


Raw Text: <a href="../rawtext/text03_zhuangzi_1_2_4_17.txt"> {{ page.title }} </a>

Text acquired from: (<a href="https://terebess.hu/english/tao/Zhuangzi-Burton-Watson.pdf"> Link </a>)



**N-gram analysis** Full Data (in TSV): <a href="../tsv/text03_zhuangzi_1_2_4_17_result.tsv"> here </a>

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
{% for onegram in site.data.text03_zhuangzi_1_2_4_17_result %}
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
