(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{btrX:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return p}));var r=t("+I+c"),l=(t("mXGw"),t("/FXl")),o=t("7XvJ"),i={},a={_frontmatter:i},s=o.a;function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)(s,Object.assign({},a,t,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h1",null,"Dokumentasjon til portalen"),Object(l.b)("p",null,"For at designsystemet skal fungere må systemdokumentasjonen være god. Hvis utviklere og designere ikke vet hvilke muligheter og begrensninger som finnes i systemet, kommer de til å gjøre feil og dobbeltarbeid."),Object(l.b)("p",null,"Vi prøver å levere god dokumentasjon for Jøkul, og vi har bygd opp rammeverket for dokumentasjon slik at Jøkul har det som trengs og sånn at vi kan levere en smidig utvikleropplevelse. Det skal bare være én kilde til sannhet."),Object(l.b)("h2",null,"Markdown"),Object(l.b)("p",null,"All dokumentasjon på portalen en skrevet med språket ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://daringfireball.net/projects/markdown/"}),"Markdown"),". Dette er et markeringsspråk som lar deg definere strukturen i det du skriver ved hjelp av enkle tegn i teksten. Her følger en kort introduksjon til de viktigste funksjonene. For en mer utfyllende gjennomgang med eksempler anbefaler vi ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://www.markdownguide.org/basic-syntax/"}),"Markdown Guide"),". Hvis du vil ha forhåndsvisning mens du skriver kan du bruke online-verktøy som f.eks. ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://dillinger.io/"}),"Dillinger"),"."),Object(l.b)("h3",null,"Avsnitt og utheving"),Object(l.b)("p",null,"Du markerer et nytt avsnitt ved å sette inn en tom linje. Dette må du også gjøre før og etter alle overskrifter. Hvis du ønsker å sette inn et linjeskift uten å starte et nytt avsnitt, må du legge inn to mellomrom på slutten av linjen, hvis ikke vil linjeskiftet bli ignorert."),Object(l.b)("p",null,"Utheving av tekst gjøres ved å sette stjerne eller understrek før og etter teksten som skal utheves: Både ",Object(l.b)("inlineCode",{parentName:"p"},"_dette_")," og ",Object(l.b)("inlineCode",{parentName:"p"},"*dette*")," vil vises som ",Object(l.b)("em",{parentName:"p"},"dette"),". Ønsker du kraftigere utheving kan du bruke to stjerner eller to understreker: Både ",Object(l.b)("inlineCode",{parentName:"p"},"__dette__")," og ",Object(l.b)("inlineCode",{parentName:"p"},"**dette**")," vil vises som ",Object(l.b)("strong",{parentName:"p"},"dette"),"."),Object(l.b)("h3",null,"Overskrifter"),Object(l.b)("p",null,"Overskrifter må stå på en egen linje, og være et eget avsnitt (altså med tom linje over og under). Overskriftsnivået angis med firkanttegn (hashtags) på starten av linjen, etterfulgt av et mellomrom. Antall firkanttegn angir overskriftsnivået, for eksempel:"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"# Overskrift på nivå 1")),Object(l.b)("h3",null,"Lister"),Object(l.b)("p",null,"Punktlister angis med en stjerne eller bindestrek foran hvert punkt, etterfulgt av et mellomrom. ",Object(l.b)("em",{parentName:"p"},"Ikke")," bruk tomme linjer mellom punktene. Du kan skape lister med innrykk ved å sette inn fire mellomrom før listepunktet:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),"- Et punkt\n    - Et innrykket punkt\n- Et nytt punkt på toppnivå\n")),Object(l.b)("p",null,"Nummererte lister angis med tall og punktum på starten av linjen, etterfulgt av mellomrom. Du må starte på 1, men tallene du skriver ellers har ingen påvirkning på resultatet; det vil alltid bli stigende rekkefølge:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{}),"1. Det første punktet\n8. Det andre punktet (selv om det står åtte)\n1. Det tredje punktet (selv om det står 1)\n")),Object(l.b)("h2",null,"Slik dokumenterer vi komponentene"),Object(l.b)("p",null,"For å dokumentere en ny komponent i portalen oppretter du en ",Object(l.b)("inlineCode",{parentName:"p"},".mdx")," fil i ",Object(l.b)("inlineCode",{parentName:"p"},"<pakkenavn>/documentation"),". MDX er en versjon av Markdown som lar deg bygge inn React direkte i dokumentet. MDX-filen plukkes opp automatisk av portalen hvis den har en ",Object(l.b)("inlineCode",{parentName:"p"},"title")," definert i ",Object(l.b)("a",Object.assign({parentName:"p"},{href:"https://www.gatsbyjs.org/docs/adding-markdown-pages/#frontmatter-for-metadata-in-markdown-files"}),"frontmatter")," (se under). I tillegg til tittelen forventer portalen å finne pakkenavnet (uten ",Object(l.b)("inlineCode",{parentName:"p"},"@fremtind/jkl-"),") til stilpakken og React-pakken. Lenker til GitHub blir generert automatisk ut fra disse. Du kan ha flere slike dokumentasjonsfiler i samme pakke dersom det for eksempel eksporteres flere komponenter."),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-mdx"}),"---\ntitle: Accordion\nreact: accordion-react\nscss: accordion\n---\n")),Object(l.b)("p",null,"Komponentdokumentasjonen skal bestå av en kort beskrivelse av komponentens tiltenkte funksjon og bruk, et eksempel på komponenten, og eventuell utfyllende dokumentasjon av bruk med eksempler der det trengs. For å kunne vise eksempel på komponenten, samt riktig og feil bruk av den, har vi laget noen hjelpekomponenter som automatisk er tilgjengelige når du skriver komponentdokumentasjonen. Disse beskrives nærmere under."),Object(l.b)("h3",null,"Komponenteksempler"),Object(l.b)("p",null,"For å vise eksempel på komponenten i portalen har vi laget en hjelpekomponent som heter ",Object(l.b)("inlineCode",{parentName:"p"},"ComponentExample"),". Denne kan du bruke i komponentdokumentasjonen uten å måtte importere den eksplisitt. Den tar inn en React-komponent som inneholder eksempelet du vil vise. ",Object(l.b)("inlineCode",{parentName:"p"},"ComponentExample")," tar i tillegg inn en liste over egenskaper som skal kunne skrus av og på i eksempelet, samt en liste over verdier som kan ha flere valg:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-mdx"}),'<ComponentExample component={DittEksempel} knobs={\n    boolProps={["En verdi", "En annen verdi"]}\n    choiceProps={[{\n        name: "Verdi med valg",\n        values: ["verdi1", "verdi2"],\n        selectedValue: 0 // indeksen til forhåndsvalgt alternativ\n    }]}\n} />\n')),Object(l.b)("p",null,"Disse verdiene blir vist som valg i portalen med avkrysningsbokser eller radioknapper. De valgte verdiene blir eksponert for eksempelet slik at du kan bruke dem til å endre egenskaper:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'// typer for verdiene:\nimport { ExampleComponentProps } from "@fremtind/jkl-portal-components";\n\nexport function DittEksempel({ boolValues, choiceValues }: ExampleComponentProps) {\n    boolValues["En verdi"] // boolsk verdi\n    choiceValues["Verdi med valg"] // "verdi1" eller "verdi2"\n\n    // Bruk dem i eksempelet slik:\n    <MinKomponent boolskEgenskap={boolValues["En verdi"]} valgEgenskap={choiceValues["Verdi med valg"]} />\n}\n')),Object(l.b)("h3",null,"Eksempler på riktig og feil bruk"),Object(l.b)("p",null,"For å vise eksempler på riktig og feil bruk kan du bruke hjelpekomponenten ",Object(l.b)("inlineCode",{parentName:"p"},"DoDontExample"),". Denne kan du bruke i komponentdokumentasjonen uten å måtte importere den eksplisitt. Komponenten tar inn type eksempel (",Object(l.b)("inlineCode",{parentName:"p"},"do")," eller ",Object(l.b)("inlineCode",{parentName:"p"},"dont"),"), et bilde som viser eksempelet, og en tekst som beskriver bruken:"),Object(l.b)("pre",null,Object(l.b)("code",Object.assign({parentName:"pre"},{className:"language-tsx"}),'<DoDontExample type="do" description="Kun én primærknapp" image="/assets/do-donts/button-do-1.png" />\n')),Object(l.b)("p",null,"Bildet legger du i mappen ",Object(l.b)("inlineCode",{parentName:"p"},"static")," under portal-pakken i prosjektet."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-getstarted-portal-guide-mdx-faac5f039b827186353b.js.map