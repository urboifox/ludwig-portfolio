/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ScrollTop } from "./";

const Imprint = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <section
      className="text-white text-[14px] mx-auto md:text-[30px] font-brandonLight font-light max-w-[1000px] px-0 md:px-20"
      id="mainContent"
    >
      <h1 className="flex items-center justify-center mb-16">
        <Link
          to="/"
          className="transition-all duration-200 hover:text-primary uppercase text-[75px] font-bold text-center w-full font-montserrat"
        >
          Home
        </Link>
      </h1>
      <div className="text">
        <div className="break">
          <p className="title">THIS WEBSITE DOES NOT USE COOKIES</p>
          <p className="imprintP">Datenschutzerklärung</p>
          <p className="imprintP">1. Datenschutz auf einen Blick</p>
          <p className="imprintP">Allgemeine Hinweise</p>
          <p className="imprintP">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Informationen
            zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
            aufgeführten Datenschutzerklärung.
          </p>
          <p className="imprintP">Datenerfassung auf unserer Website</p>
        </div>
        <div className="break">
          <p className="imprintP">
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
            dieser Website entnehmen. Wie erfassen wir Ihre Daten? Ihre Daten
            werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
            Hierbei kann es sich z.B. um Daten handeln, die Sie in ein
            Kontaktformular eingeben. Andere Daten werden automatisch beim
            Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor
            allem technische Daten (z.B. Internetbrowser, Betriebssystem oder
            Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
            automatisch, sobald Sie unsere Website betreten. Wofür nutzen wir
            Ihre Daten? Ein Teil der Daten wird erhoben, um eine fehlerfreie
            Bereitstellung der Website zu gewährleisten. Andere Daten können zur
            Analyse Ihres Nutzerverhaltens verwendet werden. Welche Rechte haben
            Sie bezüglich Ihrer Daten? Sie haben jederzeit das Recht
            unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
            gespeicherten personenbezogenen Daten zu erhalten. Sie haben
            außerdem ein Recht, die Berichtigung, Sperrung oder Löschung dieser
            Daten zu verlangen. Hierzu sowie zu weiteren Fragen zum Thema
            Datenschutz können Sie sich jederzeit unter der im Impressum
            angegebenen Adresse an uns wenden. Des Weiteren steht Ihnen ein
            Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Außerdem
            haben Sie das Recht, unter bestimmten Umständen die Einschränkung
            der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Details
            hierzu entnehmen Sie der Datenschutzerklärung unter „Recht auf
            Einschränkung der Verarbeitung“.
          </p>
          <p className="imprintP">
            2. Allgemeine Hinweise und Pflichtinformationen
          </p>
        </div>
        <div className="break">
          <p className="imprintP">Datenschutz</p>
          <p className="within">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung.
          </p>
          <p className="within">
            Wenn Sie diese Website benutzen, werden verschiedene
            personenbezogene Daten erhoben. Personenbezogene Daten sind Daten,
            mit denen Sie persönlich identifiziert werden können. Die
            vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben
            und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem
            Zweck das geschieht.
          </p>
          <p className="imprintP">
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z.B.
            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
            nicht möglich.
          </p>
          <p className="imprintP">Hinweis zur verantwortlichen Stelle</p>
          <p className="imprintP">
            Die verantwortliche Stelle für die Datenverarbeitung und den Inhalt
            auf dieser Website ist:
          </p>
          {/* <p className="within">{data.name}</p>
          <p className="within">{data.address1}</p>
          <p className="within">{data.address2}</p>
          <p className="within">Telefon: {data.telefon}</p>
          <p className="imprintP">E-Mail: {data.email}</p> */}
          <p className="imprintP">
            Verantwortliche Stelle ist die natürliche oder juristische Person,
            die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten (z.B. Namen,
            E-Mail-Adressen o. Ä.) entscheidet.
          </p>
          <p className="imprintP">
            Widerruf Ihrer Einwilligung zur Datenverarbeitung
          </p>
          <p className="imprintP">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
            Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
            jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per
            E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
            Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>
          <p className="imprintP">
            Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
            gegen Direktwerbung (Art. 21 DSGVO)
          </p>
          <p className="imprintP">
            Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e
            oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen,
            die sich aus Ihrer besonderen Situation ergeben, gegen die
            Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen;
            dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
            Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht,
            entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch
            einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht
            mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige
            Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte
            und Freiheiten überwiegen oder die Verarbeitung dient der
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
            (Widerspruch nach Art. 21 Abs. 1 DSGVO). Werden Ihre
            personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben,
            so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung
            Sie betreffender personenbezogener Daten zum Zwecke derartiger
            Werbung einzulegen; dies gilt auch für das Profiling, soweit es mit
            solcher Direktwerbung in Verbindung steht. Wenn Sie widersprechen,
            werden Ihre personenbezogenen Daten anschließend nicht mehr zum
            Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2
            DSGVO).
          </p>
          <p className="imprintP">
            Beschwerderecht bei der zuständigen Aufsichtsbehörde
          </p>
          <p className="imprintP">
            Im Falle von Verstš§en gegen die DSGVO steht den Betroffenen ein
            Beschwerderecht bei einer Aufsichtsbehšrde, insbesondere in dem
            Mitgliedstaat ihres gewšhnlichen Aufenthalts, ihres Arbeitsplatzes
            oder des Orts des mutma§lichen Versto§es zu. Das Beschwerderecht
            besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
            gerichtlicher Rechtsbehelfe.
          </p>
          <p className="imprintP">Recht auf Datenübertragbarkeit</p>
          <p className="imprintP">
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
            oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
            oder an einen Dritten in einem gängigen, maschinenlesbaren Format
            aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten
            an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
            soweit es technisch machbar ist.
          </p>
          <p className="imprintP">
            Auskunft, Sperrung, Löschung und Berichtigung
          </p>
          <p className="imprintP">
            Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
            jederzeit das Recht auf unentgeltliche Auskunft über Ihre
            gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger
            und den Zweck der Datenverarbeitung und ggf. ein Recht auf
            Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu
            weiteren Fragen zum Thema personenbezogene Daten können Sie sich
            jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
          </p>
          <p className="imprintP">Recht auf Einschränkung der Verarbeitung</p>
          <p className="within">
            Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
            personenbezogenen Daten zu verlangen. Hierzu können Sie sich
            jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
            Das Recht auf Einschränkung der Verarbeitung besteht in folgenden
            Fällen:
          </p>
          <ul>
            <li>
              Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
              personenbezogenen Daten bestreiten, benötigen wir in der Regel
              Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie
              das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
              geschah / geschieht, können Sie statt der Löschung die
              Einschränkung der Datenverarbeitung verlangen.
            </li>
            <li>
              Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie
              sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von
              Rechtsansprüchen benötigen, haben Sie das Recht, statt der
              Löschung die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen.
            </li>
            <li>
              Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
              haben, muss eine Abwägung zwischen Ihren und unseren Interessen
              vorgenommen werden. Solange noch nicht feststeht, wessen
              Interessen überwiegen, haben Sie das Recht, die Einschränkung der
              Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
            </li>
          </ul>
          <p className="imprintP">
            Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
            eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
            abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
            Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz der
            Rechte einer anderen natürlichen oder juristischen Person oder aus
            Gründen eines wichtigen öffentlichen Interesses der Europäischen
            Union oder eines Mitgliedstaats verarbeitet werden.
          </p>
          <p className="imprintP">3. Datenerfassung auf unserer Website</p>
        </div>
        <div className="break">
          <p className="imprintP">Anfrage per E-Mail, Telefon oder Telefax</p>
          <p className="within">
            Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
            Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen
            Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei
            uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne
            Ihre Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf
            Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
            der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
            vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
            beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
            DSGVO) und / oder auf unseren berechtigten Interessen (Art. 6 Abs. 1
            lit. f DSGVO), da wir ein berechtigtes Interesse an der effektiven
            Bearbeitung der an uns gerichteten Anfragen haben.
          </p>
          <p className="within">
            Die von Ihnen an uns per Kontaktanfragen übersandten Daten
            verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
            Einwilligung zur Speicherung widerrufen oder der Zweck für die
            Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung
            Ihres Anliegens). Zwingende gesetzliche Bestimmungen – insbesondere
            gesetzliche Aufbewahrungsfristen
          </p>
          <p className="imprintP">– bleiben unberührt.</p>
        </div>
        <div className="break flex items-end justify-between">
          <p className="imprintP">
            Quelle: <span>eRecht24</span>
          </p>
          <ScrollTop />
        </div>
      </div>
    </section>
  );
};

export default Imprint;
