<template>
  <div class="page-container home">
    <Header/>
    <main>
      <div class="content">
        <div class="content__logo logo">
          <img class="logo__image" src="/img/icons/landing_graphic.svg" :alt="$t('meta.title')"/>
        </div>
        <div class="content__text">{{ $t('impress.intro') }}</div>
      </div>
      <Card>
        <div class="users">
          <UserCard v-for="user in users" :user="user" :key="user.name"/>
        </div>
      </Card>
      <h1>Impressum</h1>

      <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
      <p>Johannes Konze<br/>
        Gravensteiner Str. 54<br/>
        28219 Bremen</p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: team@hilfstelefon.de</p>
      <h3>Haftung f&uuml;r Inhalte</h3>
      <p>
        Als Diensteanbieter sind wir
        gem&auml;&szlig; &sect; 7 Abs.1 TMG f&uuml;r eigene Inhalte auf diesen Seiten nach den
        allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
        Diensteanbieter jedoch nicht verpflichtet, &uuml;bermittelte oder
        gespeicherte fremde Informationen
        zu &uuml;berwachen oder nach Umst&auml;nden zu forschen, die auf eine rechtswidrige
        T&auml;tigkeit hinweisen.</p>
      <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach
        den allgemeinen Gesetzen bleiben hiervon unber&uuml;hrt. Eine diesbez&uuml;gliche Haftung
        ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung m&ouml;glich.
        Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte
        umgehend entfernen.</p>
      <h3>Haftung f&uuml;r Links</h3>
      <p>Unser Angebot enth&auml;lt Links zu externen Websites Dritter, auf deren Inhalte wir keinen
        Einfluss haben. Deshalb k&ouml;nnen wir f&uuml;r diese fremden Inhalte
        auch keine Gew&auml;hr
        &uuml;bernehmen. F&uuml;r die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
        oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf m&ouml;gliche Rechtsverst&ouml;&szlig;e &uuml;berpr&uuml;ft. Rechtswidrige
        Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>
      <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
        Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
      <h3>Urheberrecht</h3>
      <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
        dem deutschen Urheberrecht. Die Vervielf&auml;ltigung, Bearbeitung, Verbreitung und jede Art
        der Verwertung au&szlig;erhalb der Grenzen des Urheberrechtes bed&uuml;rfen der
        schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser
        Seite sind nur f&uuml;r den privaten, nicht kommerziellen Gebrauch gestattet.</p>
      <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
        Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
        gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
        bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.</p>

    </main>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import Header from '../components/Header.vue';
import UserCard from '../components/UserCard.vue';

export default {
  name: 'Home',
  components: {
    UserCard,
    Card,
    Header,
  },
  methods: {
    shuffleArray(array) {
      const t = array;
      // eslint-disable-next-line no-plusplus
      for (let i = t.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = t[i];
        t[i] = t[j];
        t[j] = temp;
      }
      return t;
    },
  },
  computed: {
    users() {
      const users = [{
        name: 'Johannes Konze',
        image: '/img/users/Johannes.jpg',
        links: [
          {
            url: '//konze.it',
            pretty: 'konze.it',
          },
          {
            url: '//github.com/jkonze',
            pretty: 'GitHub',
          },
        ],
      },
      {
        name: 'Petra Karrasch',
        image: '/img/users/Petra.jpg',
        links: [
          {
            url: '//universoom.de',
            pretty: 'universoom.de',
          },
        ],
      },
      {
        name: 'Felix Wagner',
        image: '/img/users/felix.jpg',
        links: [
          {
            url: '//bottlebase.com',
            pretty: 'bottlebase',
          },
          {
            url: '//github.com/felex0982',
            pretty: 'GitHub',
          },
        ],
      },
      {
        name: 'Nico Windler',
        image: '/img/users/Nico.jpg',
        links: [
          {
            url: '//bottlebase.com',
            pretty: 'bottlebase.com',
          },
          {
            url: '//github.com/windler',
            pretty: 'GitHub',
          },
        ],
      },
      {
        name: 'Tim G. Lücke',
        image: '/img/users/Tim.jpg',
        links: [
          {
            url: '//github.com/TimsHisProjects',
            pretty: 'GitHub',
          },
        ],
      },
      {
        name: 'Markus Willems',
        image: '/img/users/Markus.jpg',
        links: [
          {
            url: '//markus-willems.de',
            pretty: 'markus-willems.de',
          },
          {
            url: '//github.com/markus-willems',
            pretty: 'GitHub',
          },
        ],
      },
      {
        name: 'Tom Beyer',
        image: '/img/users/Tom.jpg',
        links: [
          {
            url: '//github.com/betom84',
            pretty: 'GitHub',
          },
        ],
      },
      {
        name: 'Daniel Köhler',
        image: '/img/users/Daniel.jpg',
        links: [
          {
            url: '//koehdaniel.de',
            pretty: 'koehdaniel.de',
          },
          {
            url: '//github.com/koehdaniel',
            pretty: 'GitHub',
          },
        ],
      },
      {
        name: 'Sascha Ritter',
        image: '/img/users/Sascha.jpg',
        links: [
          {
            url: '//github.com/sascharitter',
            pretty: 'GitHub',
          },
        ],
      },
      {
        name: 'Paul Lorenz',
        image: '/img/users/Paul.jpg',
        links: [
          {
            url: '//github.com/pl0renz',
            pretty: 'GitHub',
          },
        ],
      },
      {
        name: 'Jan Wiedenhoff',
        image: '/img/users/Janpeter.jpg',
        links: [
          {
            url: '//linkedin.com/in/janwiedenhoff/',
            pretty: 'Linked.in',
          },
        ],
      },
      ];
      return this.shuffleArray(users);
    },
  },
};
</script>

<style lang="scss" scoped>
  .users {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    height: 100%;
    flex-wrap: wrap;
  }
</style>
