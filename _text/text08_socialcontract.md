---
title: Text 8 Social Contract
layout: default
description: Text 1,2,3-gram analysis of Social Contract Book 1 & 2 (translated by G. D. H. COLE)
shorttitle: "8 Social Contract"
---
{% include menu.html %}

**Social Contract Book 1 & 2**

Raw Text: <a href="../rawtext/text08_social_contract_bk1_2.txt"> {{ page.title }} </a>

Text acquired from: Online Library of Liberty (<a href="https://oll.libertyfund.org/title/cole-the-social-contract-and-discourses"> Link </a>)



**N-gram analysis** Full Data (in TSV): <a href="../tsv/text08_social_contract_bk1_2_result.tsv"> here </a>

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
{% for onegram in site.data.text08_social_contract_bk1_2_result %}
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
