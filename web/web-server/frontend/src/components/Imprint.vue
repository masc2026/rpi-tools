<template>
  <div>
    <h1>Impressum</h1>

    <h2>Angaben gemäß § 5 TMG</h2>
    <p>Max Mustermann<br>
       Musterstraße 30<br>
       D-ZZZZZ Musterstadt<br>
    </p>

    <h2>Kontakt</h2>
    <p>E-Mail: <a href="mailto:max.mustermann@example.com">max.mustermann@example.com</a><br>
       Telefon: 07161 5035909 <br>
    </p>

    <h3>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</h3>
    <p>Max Mustermann<br>
       Musterstraße 30<br>
       D-ZZZZZ Musterstadt<br>
    </p>

    <h3>Haftung für Inhalte</h3>
    <p>Die Inhalte meiner Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen.</p>

    <h3>Haftung für Links</h3>
    <p>Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss haben. Deshalb kann ich für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.</p>

    <h3>Urheberrecht</h3>
    <p>Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen, wenn nicht anders angegeben, dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ImprintText',
  setup() {
  }
})
</script>

<style scoped>
h1 {
  font-size: 1.4em;
  margin-top: 1.0em;
  margin-bottom: 0.6em;
}

h2 {
  font-size: 1.2em;
  margin-top: 0.8em;
  margin-bottom: 0.6em;
}

h3 {
  font-size: 1.0em;
  margin-top: 0.7em;
  margin-bottom: 0.6em;
}
</style>