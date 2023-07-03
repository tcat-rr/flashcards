---
title: Flashcards
permalink: /flashcrds/
nav_exclude: false
nav_order: 0
---

# Virtual Flashcards

## Choose a deck:

<script src="{{ site.baseurl }}/assets/js/script.js"></script>

{% for node in site.data.data["Nodes"] %}
    <div class="deck-name">
        {{ node[0] }}
    </div>
{% endfor %}