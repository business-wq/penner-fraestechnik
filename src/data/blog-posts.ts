export interface BlogPost {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  keywords?: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
}

import heroImage from "@/assets/hero-solar.jpg";
import solarInstallation from "@/assets/solar-installation.jpg";
import solarCompleted from "@/assets/solar-completed.jpg";
import solarAerial from "@/assets/solar-aerial.jpg";
import projekt1 from "@/assets/gallery/projekt-1.jpg";
import projekt2 from "@/assets/gallery/projekt-2.jpg";
import projekt5 from "@/assets/gallery/projekt-5.jpg";

export const blogPosts: BlogPost[] = [
  {
    slug: "waermepumpe-und-photovoltaik-perfekte-kombination",
    title: "Wärmepumpe & Photovoltaik – Die perfekte Kombination",
    metaTitle: "Wärmepumpe & Photovoltaik kombinieren | Marklewitz Solar",
    metaDescription: "Warum Wärmepumpe und Photovoltaik zusammen die ideale Lösung sind. Eigenen Strom erzeugen und damit heizen – effizient und nachhaltig.",
    keywords: "Wärmepumpe Photovoltaik, Wärmepumpe mit PV, Wärmepumpe Kirchheim, Photovoltaik Owen",
    date: "2026-04-01",
    excerpt: "Wer eine Wärmepumpe mit einer Photovoltaikanlage kombiniert, heizt mit eigenem Solarstrom – günstiger und unabhängiger geht es kaum.",
    image: solarInstallation,
    content: `
## Warum Wärmepumpe und Photovoltaik zusammenpassen

Eine Wärmepumpe nutzt Umweltwärme aus Luft, Erde oder Wasser, um Ihr Zuhause zu heizen. Dafür benötigt sie Strom – und genau hier kommt Ihre Photovoltaikanlage ins Spiel.

**Statt teuren Netzstrom zu nutzen, versorgen Sie Ihre Wärmepumpe direkt mit eigenem Solarstrom.** Das senkt Ihre Heizkosten erheblich und macht Sie unabhängiger von steigenden Energiepreisen.

## Die Vorteile auf einen Blick

- **Niedrigere Heizkosten**: Ein Großteil des Wärmepumpen-Stroms kommt direkt vom Dach.
- **Höherer Eigenverbrauch**: Ihre PV-Anlage wird noch wirtschaftlicher, weil mehr Strom selbst genutzt wird.
- **CO₂-neutral heizen**: Solarstrom ist emissionsfrei – Ihre Heizung wird klimafreundlich.
- **Unabhängigkeit**: Weniger Abhängigkeit von Gas, Öl und steigenden Strompreisen.
- **Wertsteigerung**: Die Kombination erhöht den Wert Ihrer Immobilie.

## Wie funktioniert das in der Praxis?

Tagsüber produziert Ihre PV-Anlage Strom. Die Wärmepumpe läuft idealerweise in den Stunden mit der höchsten Sonneneinstrahlung. Ein Pufferspeicher kann die Wärme zwischenspeichern, sodass auch abends geheizt werden kann, ohne Netzstrom zu nutzen.

Mit einem zusätzlichen Stromspeicher lässt sich der Eigenverbrauch noch weiter steigern – so nutzen Sie auch nachts Ihren eigenen Solarstrom.

## Für wen eignet sich die Kombination?

- Neubauten mit moderner Dämmung
- Sanierte Altbauten mit Fußbodenheizung oder Niedertemperatur-Heizkörpern
- Haushalte, die von Öl oder Gas auf erneuerbare Energien umsteigen möchten

## Unser Angebot

Als Ihr regionaler Partner für Photovoltaik und Wärmepumpen beraten wir Sie ganzheitlich. Wir planen Ihre Anlage so, dass PV und Wärmepumpe optimal zusammenspielen – für maximale Effizienz und minimale Kosten.

Mehr zur Umsetzung finden Sie auch auf unserer [Wärmepumpen-Seite](/waermepumpe).

**Kontaktieren Sie uns für ein kostenloses Beratungsgespräch!**
    `,
  },
  {
    slug: "waermepumpe-foerderung-und-vorteile",
    title: "Wärmepumpe: Förderung, Vorteile & was Sie wissen sollten",
    metaTitle: "Wärmepumpe Förderung & Vorteile | Marklewitz Solar",
    metaDescription: "Alles zur Wärmepumpe: Welche Förderungen gibt es? Welche Vorteile bietet sie? Ihr Ratgeber von Marklewitz Solar aus Owen an der Teck.",
    keywords: "Wärmepumpe Förderung, Wärmepumpe Vorteile, Wärmepumpe Owen, Wärmepumpe Esslingen",
    date: "2026-03-15",
    excerpt: "Die Wärmepumpe ist eine der effizientesten Heizlösungen. Erfahren Sie, welche Förderungen möglich sind und warum sich der Umstieg lohnt.",
    image: solarCompleted,
    content: `
## Was ist eine Wärmepumpe?

Eine Wärmepumpe entzieht der Umgebung (Luft, Erde oder Grundwasser) Wärme und bringt sie auf ein höheres Temperaturniveau, um Ihr Haus zu heizen. Das Prinzip funktioniert wie ein umgekehrter Kühlschrank – nur dass die Wärme ins Haus geleitet wird.

## Die gängigsten Wärmepumpen-Typen

- **Luft-Wasser-Wärmepumpe**: Am häufigsten verbaut, nutzt die Außenluft als Wärmequelle. Einfache Installation, keine Erdarbeiten nötig.
- **Sole-Wasser-Wärmepumpe**: Nutzt Erdwärme über Erdsonden oder Flächenkollektoren. Sehr effizient, aber aufwendigere Installation.
- **Wasser-Wasser-Wärmepumpe**: Nutzt Grundwasser als Wärmequelle. Höchste Effizienz, aber genehmigungspflichtig.

## Welche Förderungen gibt es?

Der Staat fördert den Einbau von Wärmepumpen über verschiedene Programme:

- **BEG-Förderung (BAFA)**: Zuschüsse für den Einbau effizienter Wärmepumpen beim Heizungstausch.
- **Klimabonus**: Zusätzlicher Bonus beim Austausch einer alten Öl- oder Gasheizung.
- **KfW-Kredite**: Zinsgünstige Darlehen für energetische Sanierungen.

Die genauen Fördersätze können sich ändern – wir beraten Sie gerne zu den aktuell verfügbaren Programmen in Ihrer Region.

## Vorteile einer Wärmepumpe

- **Effizient**: Aus einer Kilowattstunde Strom werden bis zu vier Kilowattstunden Wärme.
- **Klimafreundlich**: Kein Verbrennen fossiler Brennstoffe vor Ort.
- **Niedrige Betriebskosten**: Besonders in Kombination mit einer PV-Anlage.
- **Langlebig**: Wärmepumpen haben eine Lebensdauer von 20+ Jahren.
- **Kühlung möglich**: Viele Modelle können im Sommer auch kühlen.
- **Zukunftssicher**: Ab 2024 müssen neue Heizungen zu 65 % erneuerbare Energien nutzen – die Wärmepumpe erfüllt das.

## Wärmepumpe und Photovoltaik – das Dream-Team

Die Kombination aus Wärmepumpe und PV-Anlage ist besonders wirtschaftlich: Sie erzeugen Ihren eigenen Strom und nutzen ihn direkt zum Heizen. So werden Sie nahezu unabhängig von externen Energieversorgern.

## Marklewitz Solar – Ihr Partner für Wärmepumpen

Von der Beratung über die Planung bis zur Installation – wir bieten Ihnen alles aus einer Hand. Als regionaler Anbieter in Owen an der Teck kennen wir die Gegebenheiten vor Ort und finden die passende Lösung für Ihr Zuhause.

**Vereinbaren Sie jetzt Ihr kostenloses Erstgespräch!**
    `,
  },
  {
    slug: "photovoltaik-kirchheim-welche-dachseite-lohnt-sich",
    title: "Photovoltaik in Kirchheim: Welche Dachseite lohnt sich wirklich?",
    metaTitle: "Photovoltaik Kirchheim: Welche Dachseite lohnt sich?",
    metaDescription: "Süddach, Ost-West oder Teilverschattung? So planen Hausbesitzer in Kirchheim unter Teck ihre Photovoltaikanlage wirtschaftlich und alltagstauglich.",
    keywords: "Photovoltaik Kirchheim unter Teck, Dachseite Photovoltaik, Ost West Anlage Kirchheim, Solaranlage Kirchheim",
    date: "2025-11-18",
    excerpt: "Nicht jedes perfekte PV-Dach zeigt exakt nach Süden. Gerade in Kirchheim unter Teck können auch Ost-West-Dächer sehr wirtschaftlich sein.",
    image: heroImage,
    content: `
## Muss ein Dach immer nach Süden zeigen?

Nein. Für viele Häuser in Kirchheim unter Teck, Weilheim an der Teck und Owen ist eine Ost-West-Belegung sogar besonders sinnvoll. Sie liefert morgens und abends Strom, also genau dann, wenn im Haushalt gekocht, gewaschen oder geladen wird.

## Wann ist Südausrichtung stark?

- **Maximale Mittagsspitze**: Gut, wenn möglichst viel Ertrag auf kleiner Fläche erzielt werden soll.
- **Klassische Einfamilienhäuser**: Häufig die erste Wahl bei wenig Verschattung.
- **Sehr gute Ergänzung mit Speicher**: Mittagsüberschüsse lassen sich besser puffern.

## Warum Ost-West oft unterschätzt wird

- **Breitere Stromproduktion über den Tag**: Praktisch für Familien und Homeoffice.
- **Weniger extreme Mittagsspitzen**: Das verbessert oft den Eigenverbrauch.
- **Gute Lösung bei komplexen Dächern**: Gerade in gewachsenen Wohngebieten rund um Kirchheim und Nürtingen.

## Worauf wir in der Planung achten

Entscheidend sind nicht nur Himmelsrichtung und Dachneigung, sondern auch Verschattung, Verbrauchsprofil, Speicherwunsch und spätere Erweiterungen wie Wallbox oder Wärmepumpe.

Wenn Sie aus der Region kommen, lohnt sich auch ein Blick auf unsere Seite zu [Photovoltaik in Kirchheim unter Teck](/photovoltaik-kirchheim-unter-teck).

## Fazit

Die beste Dachseite ist nicht automatisch die theoretisch sonnigste, sondern die, die zu Ihrem Haus und Ihrem Stromverbrauch passt. Genau das sollte eine gute PV-Planung sichtbar machen.
    `,
  },
  {
    slug: "stromspeicher-owen-wann-lohnt-sich-die-kombination",
    title: "Stromspeicher in Owen: Wann lohnt sich die Kombination mit PV?",
    metaTitle: "Stromspeicher in Owen: Wann lohnt sich PV mit Speicher?",
    metaDescription: "Wann lohnt sich ein Stromspeicher zur Photovoltaikanlage in Owen an der Teck? Ein kompakter Überblick zu Eigenverbrauch, Lastprofil und Alltag.",
    keywords: "Stromspeicher Owen, Photovoltaik mit Speicher, PV Speicher Owen an der Teck, Solarspeicher Region Esslingen",
    date: "2025-08-07",
    excerpt: "Ein Speicher ist nicht automatisch Pflicht. In vielen Haushalten in Owen lohnt er sich aber, wenn Verbrauch und Anlagenkonzept sauber zusammenpassen.",
    image: projekt5,
    content: `
## Speicher ist kein Selbstzweck

Ein Stromspeicher lohnt sich vor allem dann, wenn tagsüber Überschüsse entstehen, die abends oder nachts sinnvoll genutzt werden können. Genau das ist in vielen Einfamilienhäusern in Owen an der Teck der Fall.

## Typische Situationen, in denen ein Speicher sinnvoll ist

- **Familienhaushalte**: Hoher Strombedarf am Morgen und Abend.
- **Homeoffice und flexible Nutzung**: Mehr Eigenverbrauch über den Tag.
- **Wallbox oder Wärmepumpe geplant**: Dann wird ein abgestimmtes Gesamtsystem besonders interessant.

## Wann wir eher genauer rechnen

- **Sehr niedriger Stromverbrauch**: Dann kann die reine PV-Anlage schon ausreichend sein.
- **Starke Verschattung**: Dann muss zuerst die Generatorfläche sinnvoll geplant werden.
- **Nur kleine Dachflächen**: Hier zählt jedes Modul und die Prioritäten müssen klar gesetzt werden.

## Unser Praxisansatz

Wir betrachten nicht nur die Speichergröße, sondern das Zusammenspiel aus Dachfläche, Wechselrichter, Haushaltsprofil und möglichen Erweiterungen. Gerade bei Projekten zwischen Owen, Dettingen und Lenningen ist diese Abstimmung oft der Unterschied zwischen guter und sehr guter Wirtschaftlichkeit.

Mehr zur Kombination lesen Sie im Beitrag [Wärmepumpe & Photovoltaik – Die perfekte Kombination](/blog/waermepumpe-und-photovoltaik-perfekte-kombination).
    `,
  },
  {
    slug: "pv-anlage-altbau-esslingen-worauf-achten",
    title: "PV-Anlage im Altbau in Esslingen: Worauf Sie achten sollten",
    metaTitle: "PV-Anlage Altbau Esslingen: Darauf kommt es an",
    metaDescription: "Photovoltaik auf dem Altbau in Esslingen am Neckar: Diese Punkte sind bei Dach, Elektrik, Verschattung und Wirtschaftlichkeit besonders wichtig.",
    keywords: "PV Anlage Altbau Esslingen, Photovoltaik Esslingen Altbau, Solaranlage Altbau Esslingen am Neckar",
    date: "2025-05-12",
    excerpt: "Gerade in Esslingen am Neckar treffen schöne Bestandsgebäude auf anspruchsvolle Dächer. Mit guter Planung funktioniert Photovoltaik trotzdem sehr gut.",
    image: projekt1,
    content: `
## Altbau heißt nicht automatisch ungeeignet

Viele Hausbesitzer in Esslingen am Neckar gehen zunächst davon aus, dass sich Photovoltaik nur für Neubauten lohnt. In der Praxis sehen wir oft das Gegenteil: Auch Bestandsgebäude können sehr gute Voraussetzungen mitbringen.

## Diese Punkte prüfen wir zuerst

- **Dachzustand**: Trägt die bestehende Konstruktion die geplante Belegung dauerhaft?
- **Eindeckung und Dachform**: Ziegel, Gauben, Kamine und Dachfenster verändern die Modulplanung.
- **Elektrische Infrastruktur**: Zählerschrank und Hausanschluss müssen zum Projekt passen.
- **Verschattung**: Bäume, Nachbarhäuser oder Dachaufbauten verändern den Ertrag spürbar.

## Wo in Esslingen oft Potenzial liegt

In vielen Wohnlagen zwischen Esslingen, Plochingen und Wendlingen sind die Dächer zwar komplexer, dafür ist der Stromverbrauch im Haus oft hoch genug, um eine Anlage wirtschaftlich zu betreiben.

## Unser Tipp für Bestandsgebäude

Eine gute PV-Planung beginnt nicht mit der Frage nach der Modulanzahl, sondern mit einer sauberen Bestandsaufnahme. Erst dann lässt sich entscheiden, ob Speicher, Wallbox oder später sogar eine Wärmepumpe sinnvoll ergänzt werden sollten.

Für einen regionalen Einstieg finden Sie hier auch unsere Seite zu [Photovoltaik in Esslingen am Neckar](/photovoltaik-esslingen).
    `,
  },
  {
    slug: "eigenverbrauch-photovoltaik-nuertingen-familienhaus",
    title: "Photovoltaik in Nürtingen: So steigern Familien ihren Eigenverbrauch",
    metaTitle: "Photovoltaik Nürtingen: Eigenverbrauch im Familienhaus",
    metaDescription: "Wie Familien in Nürtingen ihren Eigenverbrauch mit Photovoltaik erhöhen: Alltag, Speicher, Wärmepumpe und typische Planungsfehler im Überblick.",
    keywords: "Photovoltaik Nürtingen, Eigenverbrauch Photovoltaik, PV Familie Nürtingen, Solaranlage mit Speicher Nürtingen",
    date: "2024-10-03",
    excerpt: "Die Wirtschaftlichkeit einer PV-Anlage hängt nicht nur vom Ertrag ab. Gerade in Familienhäusern in Nürtingen zählt, wie viel Strom wirklich selbst genutzt wird.",
    image: projekt2,
    content: `
## Warum Eigenverbrauch so wichtig ist

Je mehr Solarstrom direkt im Haus genutzt wird, desto stärker wirkt sich die Anlage auf Ihre laufenden Stromkosten aus. Das ist für viele Familien in Nürtingen der eigentliche Hebel.

## Typische Verbraucher im Alltag

- **Küche und Haushalt**: Spülmaschine, Waschmaschine und Trockner.
- **Warmwasser und Heizung**: Besonders interessant mit Wärmepumpe.
- **Mobilität**: Laden eines E-Autos mit eigenem Strom verbessert die Nutzung zusätzlich.

## Drei Wege zu mehr Eigenverbrauch

- **Verbrauch zeitlich verschieben**: Geräte möglichst in die Sonnenstunden legen.
- **Speicher sinnvoll dimensionieren**: Nicht maximal groß, sondern passend zum Haus.
- **Erweiterungen gleich mitdenken**: Wallbox und Wärmepumpe früh in die Planung aufnehmen.

## Häufiger Denkfehler

Viele vergleichen nur die kWp-Zahl und vergessen, wie wichtig das Nutzungsprofil des Haushalts ist. Eine etwas kleinere Anlage mit guter Eigenverbrauchsquote kann im Alltag sinnvoller sein als ein zu groß geplantes System ohne klare Nutzung.

## Regional gedacht

Gerade im Raum Nürtingen, Kirchheim und Notzingen sehen wir oft Familienhäuser mit guten Dachflächen und gleichzeitig hohem Strombedarf. Das ist eine starke Kombination für wirtschaftliche Photovoltaik.

Wenn Sie tiefer einsteigen möchten, finden Sie auf unserer Seite zu [Photovoltaik in Nürtingen](/photovoltaik-nuertingen) weitere regionale Informationen.
    `,
  },
];
