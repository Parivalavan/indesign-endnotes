/* 
    InDesign endnote solution based on scripting and cross references. 
    Copyright (C) 2015  Gregor Fellenz

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/*
Shared configuration settings 
@Version: 2
@Date: 2016-06-21
@Author Gregor Fellenz http://www.publishingx.de/
Typos and GUI Texts by Maren Pufe 
*/

var px = {
	// Configurations settings for style names -- changes is save 
	pStyleEndnoteName:"Anm", // Absatzformat der Endnote. Das Format sollte automatisch nummeriert sein. Wenn es im Dokument vorhanden ist, wird es in der GUI vorausgew�hlt.
	pStyleEndnoteFollowName:"Anm~folge", // Absatzformat f�r Endnoten mit mehr als einem Absatz. Das Format sollte automatisch nummeriert sein. Wenn es im Dokument vorhanden ist, wird es in der GUI vorausgew�hlt.
	
	// Endnote block structure 
	pStyleEndnoteHeadingName:"endnote_block_title", // Absatzformat der Endnoten�berschrift
	pStyleEndnoteSplitHeadingName:"endnote_block_section", // Absatzformat f�r die wiederholten �berschriften (wdh von: pStylePrefix) 
	pStyleEndnoteSplitHeadingPrecedingRepeatName:"endnote_block_section_preceding", // Absatzformat f�r Abs�tze vor wiederholten �berschriften (wdh von: pStyleEndnoteSplitHeadingPrecedingName)
	pStyleEndnoteSplitHeadingFollowingRepeatName:"endnote_block_section_following", // Absatzformat f�r Abs�tze vor wiederholten �berschriften (wdh von: pStyleEndnoteSplitHeadingPrecedingName)
	
	cStyleEndnoteMarkerName:"Endnotenz�hler", // Zeichenformat des Endnotenmarkers. Wenn es im Dokument vorhanden ist, wird es in der GUI vorausgew�hlt.
	crossRefStyleEndnoteName:"EndnotenMarker", // Querverweisformat. Kann nicht in der GUI ausgew�hlt werden.
	
	endnoteHeadingString:"Endnoten", // Default Text f�r die Entnoten�berschrift

	// Section Structure
	pStylePrefix:"u1", // Pr�fix der �berschriften an denen die Endnotenz�hlung geteilt wird.
	pStyleEndnoteSplitHeadingPrecedingName:"U1_Pre", // Absatzformat f�r Abs�tze, die kopiert werden sollen
	pStyleEndnoteSplitHeadingFollowingName:"U1_Follow", //  Absatzformat f�r Abs�tze, die kopiert werden sollen

	// Ignore Footnote Style
	pStyleFootnoteIgnoreName:"footnote_keep", // Absatzformate f�r Fu�noten, die nicht konvertiert werden sollen

	// User interface strings -- translation and changes are save
	ui:{
		// all scripts 
		saveDoc:{en:"Document is not saved", de:"Dokument ist nicht gespeichert"},
		saveDocInfo:{en:"Save your document first!\rSave and continue?", de:"Das Dokument muss zuerst gespeichert werden!\rSpeichern und fortfahren?"},
		saveDocFail:{en:"Could not save file.\n", de:"Die Datei konnte nicht gespeichert werden.\n"},
		errorInfo:{en:"Error during execution: ", de:"Fehler bei der Ausf�hrung: "},		
		versionWarning:{en:"To run this script InDesign CS5 is required", de:"F�r dieses Skript wird mindestens InDesign CS5 ben�tigt"},
		scriptVersionWarning:{en:"The document has been created with Version (v%1). Compatibility can not be guaranteed.\nPlease check carefully.", de:"Das Dokument wurde mit Version (v%1) erstellt. Die Kompatibilit�t kann nicht garantiert werden.\nBitte pr�fen Sie genau."},
		emptyEndnotePar:{en:"%1 empty Pargraph(s) with endnote format [%2]. Please delete or assign another format.", de:"%1 Abs�tze ohne Inhalt sind mit dem Format [%2] ausgezeichnet. Bitte weisen Sie ein anderes Format zu oder l�schen Sie die Abs�tze."},	
		// createEndnotes.jsx		
		menuTitle:{en:"Convert footnotes to endnotes v%1", de:"Fu�noten zu Endnoten konvertieren v%1"},		
		resultInfo:{en:"[%1] footnotes converted to endnotes!", de:"Es wurden [%1] Fu�noten zu Endnoten konvertiert!"},
		
		noTextInDoc:{en:"No text in document", de:"Es ist kein Text im Dokument enthalten"},
		noFootnoteInDoc:{en:"No footnote in document", de:"Es gibt keine Fu�note im Dokument"},
		multipleEndnoteLinks:{en:"More than one story with endnotes, cannot process this document.", de:"In mehr ale einem Textabschnitt befinden sich Endnoten, dieses Dokument kann nicht verarbeitet werden."},
		willProcessCurrentSelection:{en:"More than one story with footnotes, will process the current story (cursor position)", de:"Mehr als ein Textabschnitt enth�lt Fu�noten, es wird der aktuelle Textabschnitt (Position der Einf�gemarke) verarbeitet."},
		createSelection:{en:"More than one story with footnotes, place cursor in story and restart", de:"Mehr als ein Textabschnitt enth�lt Fu�noten, bitte positionieren Sie die Einf�gemarke im gew�nschten Textabschnitt"},
		endnoteAndFootnotesAreNotInTheSameStory:{en:"Endnotes and Footnotes are not in the same story", de:"Endnoten und Fu�noten sind nicht im gleichen Textabschnitt!"},
		unknownSelectionError:{en:"Could not determine the footnote story", de:"Der Textabschnitt mit den Fu�noten konnte nicht ermittelt werden!"},
		wrongEndnoteOrder:{en:"Position of endnote [%1] is not in sync with story flow.\nCheck your document.", de:"Die Position der Endnote [%1] entspricht nicht dem Textfluss.\nPr�fen Sie das Dokument."},
		emptyFootnote:{en:"Cannot process footnotes without text.", de:"Fu�noten ohne Text k�nnen nicht verarbeitet werden."},
		hyperlinkAlreadyExists:{en:"Endnote %1 has already a hyperlink, cannot create Backlink.", de:"Endnote %1 enth�lt bereits einen Hyperlink. Es kann kein Backlink erstellt werden."},
		
		methodPanel:{en:"Mode",de:"Verarbeitungsmodus"},
		splitByHeading:{en:"Split by paragraph style",de:"Anhand von Absatzformat trennen (Bildet Abschnitte f�r Kapitel)"},
		continuousNumbering:{en:"Continuous numbering",de:"Fortlaufend nummerieren (Alle Endnoten in einem Abschnitt)"},
		manualNumbering:{en:"Manual numbering of endnotes",de:"Manuelle Nummerierung der Endnoten"},
		manualNumberingInfo:{en:"Links only the counter. Use this if you need to process hyperlinks in endnotes. The list function in endnote paragraph style will be disabled.",de:"Verlinkt nur die Ziffer im Endnotenabsatz. F�r Hyperlinks in Endnoten sollte diese Option ausgew�hlt sein. Die Listenfunktion im Absatzformat wird deaktviert."},
		ignoreFootnotesByStyle:{en:"Ignore footnotes with paragraph style",de:"Ignoriere Fu�note mit dem Absatzformat"},		
		
		splitFormatPanel:{en:"Split endnote configuration",de:"Formatpr�fix an dem die Endnoten geteilt werden"},
		splitByHeadingStyle:{en:"Split paragraph style/heading",de:"Format zur Aufteilung in Abschnitte"},
		endNoteSplitHeadingParagraphStyle:{en:"Paragraph style for repeated headings",de:"Absatzformat wiederholte �berschriften"},

		endNoteSplitHeadingParagraphStylePreceding:{en:"Copy preceding paragraph formated by:",de:"Vorherigen Absatz kopieren, Formatvorgabe:"},
		endNoteSplitHeadingParagraphStyleFollowing:{en:"Copy following paragraph formated by:",de:"Folgenden Absatz kopieren, Formatvorgabe:"},		
		endNoteSplitHeadingParagraphStylePrecedingFollowingRepeat:{en:"Paragraph style for repeated paragraphs:",de:"Wiederholten Absatz formatieren:"},
		
		formatWarnung:{en:"Caution: Any Text formatted in paragraph style for repeated headings will be deleted. Use only in endnote area!",de:"Achtung: Texte, die mit den Absatzformaten f�r wiederholte (�ber)schriften formatiert sind, werden gel�scht. Verwenden Sie diese Formate nur im Bereich der Endnoten."},
		
		formatPanel:{en:"Endnote styling",de:"Formate der Endnoten"},
		endnoteParagraphStyle:{en:"Paragraph style endnote",de:"Absatzformat Endnote"},
		endnoteFollowParagraphStyle:{en:"Paragraph Style followup paragraph",de:"Absatzformat Folgeabsatz"},
		endnoteMarkerCharacterStyle:{en:"Character style endnote marker",de:"Zeichenformat Endnotenmarker"},
		
		endNoteHeadingPanel:{en:"Endnote Block",de:"Endnotentitel"},
		endNoteHeading:{en:"Heading",de:"Titelzeile"},
		endNoteHeadingParagraphStyle:{en:"Paragraph style heading",de:"Absatzformat Endnotentitel"},
		cancelButton:{en:"Cancel",de:"Abbrechen"},
		okButton:{en:"Convert footnotes",de:"Konvertiere Fu�noten"},
		saveButton:{en:"Save Settings in document",de:"Einstellungen im Dokument speichern"},
		
		
		invalidSelection:{en:"Invalid Selection", de:"Ung�ltige Auswahl"},
		headingStyleFail:{en:"The choosen heading [%1] does not match the heading text [%2] in your document. \n\Please check the result!", de:"Die von Ihnen gew�nschte �berschrift [%1] stimmt nicht mit dem �berschriftentext [%2] im Dokument �berein. \n\nBitte pr�fen Sie das Ergebnis!"},
		headingStyleFailBlock:{en:"The chosen heading [%1] in format [%1] cannot be found in the document. \n\Please check the result!", de:"Die von Ihnen gew�nschte �berschrift [%1] mit dem Format [%2] kann nicht gefunden werden. \n\nBitte pr�fen Sie das Ergebnis!"},
		headingStyleFailBlockMoreThanOne:{en:"The chosen heading [%1] in format [%1] is on more than one location in the document. \n\Please check the result!", de:"Die von Ihnen gew�nschte �berschrift [%1] mit dem Format [%2] ist an mehreren Stellen im Dokument gefunden worden.\n\nBitte pr�fen Sie das Ergebnis!"},
		statusFail:{en:"Undocumented Error! - Please send the document to the support!", de:"Unklarer Status! - Bitte senden Sie das Dokument an den Support!"},
		numberingFail:{en:"Followup paragraph not found! Numbering may be faulty!", de:"Folgeabsatz nicht gefunden! Nummerierung ggf. fehlerhaft!"},
		newPagesAdded:{en:"There were %1 pages added. Please check the document", de:"Es wurden %1 Seiten hinzugef�gt. Bitte pr�fen Sie den Umfang"},
		positionFail:{en:"There was an error in the endnote position analysis!\Please contact support!", de:"Es ist ein Fehler bei der Endnotenpositionsanalyse aufgetreten!\nBitte kontaktieren Sie den Support!"},		
		samePStyle:{en:"The paragraph format [%1] was also selected for the followup paragraphs, this could lead to numbering errors! The format has been duplicated.", de:"Das Absatzformat [%1] wurde auch f�r die Folgeabs�tze ausgew�hlt, dies f�hrt ggf. zu Nummerierungsfehlern! Das Format wurde dupliziert."},
		endnoteStyleNumberingFail:{en:"In paragraph style [%1] the option [Bullets and Numbering] -> [List Type : Numbes ] was activated.", de:"Im Absatzformat [%1] wurde die Option \n[Aufz�hlungszeichen und Nummerierung] -> [Listentyp: Nummerierung] aktiviert."},
		crossrefFormatFail:{en:"The cross-reference format [%1] already exists.\nThe selected different character style [%2] was set!", de:"Das Querverweisformat [%1] ist bereits vorhanden.\nDas ausgew�hlte aber abweichende Zeichenformat [%2] wurde eingestellt!"},
		endnoteStyleNumberingDeactivate:{en:"In Paragraph Style [%1] the option \n[Bullets and Numbering] -> [List Type : Numbes ] was deactivated.", de:"Im Absatzformat [%1] wurde die Option \n[Aufz�hlungszeichen und Nummerierung] -> [Listentyp: Nummerierung] deaktiviert."},
		headingFail:{en:"For the title at least one character must be entered.",de:"F�r den Titel muss mindestens ein Zeichen eingegeben werden."},
		styleSelectionFail:{en:"Error in the format selection", de:"Fehler bei der Formatauswahl"},
		styleSelectionFailSection:{en:"Error in the format selection of the section creation.", de:"Fehler bei der Formatauswahl f�r die Abschnittsbildung"},
		endnoteStoryMoved:{en:"Text and endnotes must be in the same Story\nPlease copy the endnote text to the end of the text portion", de:"Text und Endnoten m�ssen sich im gleichen InDesign Textabschnitt befinden!\nBitte kopieren Sie den Endnoten-Text an das Ende des Textabschnitts."},
		manualNumberingFail:{en:"Could not create manual numbering, did not find number at start", de:"Konnte die manuelle Nummerierung nicht erstellen. Die Aufz�hlung zu Beginn konnte nicht ermittelt werden."},       
//~		wrongNumberingExpression:{en:"Changed numbering format of [%1] to [^#^t].", de:"Das Nummerierungsformat f�r das Absatzformat [%1] wurde auf [^#^t] ge�ndert."},

		// deleteEndnotes.jsx
		noEndnoteOrMarker:{en:"The insertion point must be placed within an endnote or before the endnote marker.", de:"Die Einf�gemarke muss innerhalb einer Endnote oder vor dem Endnotenmarker platziert sein."},
		deleteEndnoteName:{en:"Remove endnote",de:"Endnote entfernen"},
		confirmEndnoteDelete:{en:"Remove Endnote %1 \n\n%2",de:"Endnote l�schen %1 \n\n%2"},

	},



	// Careful with changes below, changing options might break the update process of previously converted documents
	createBackupCopy:true,
	backupCopySuffix:"_endnoteBackupt.indd",
	
	numberBySection:true,
	manualNumbering:true,
	manualNumberingLabel:"px:Foot2EndnoteManualNumbering",
	
	hyperlinkLabel:"px:Foot2EndnoteHyperlink", // Markierung der SkriptQuerverweise
	endnoteHeadingStringLabel:"px:Foot2EndnoteHeadingString", 
	
	dokParagraphStyles:[],
	dokParagraphStyleNames:[],
	dokCharacterStyles:[],
	dokCharacterStyleNames:[],
	
	pStyleEndnote:undefined,
	pStyleEndnoteIndex:0,
	pStyleEndnoteLabel:"px:Foot2EndnoteParagraphStyle",
	
	pStyleEndnoteFollow:undefined,
	pStyleEndnoteFollowIndex:0,
	pStyleEndnoteFollowLabel:"px:Foot2EndnoteParagraphStyleFollowing",
	
	pStyleEndnoteHeading:undefined,
	pStyleEndnoteHeadingIndex:0,
	pStyleEndnoteHeadingLabel:"px:Foot2EndnoteParagraphStyleHeading",
	
	pStyleEndnoteSplitHeading:undefined,
	pStyleEndnoteSplitHeadingIndex:0,
	pStyleEndnoteSplitHeadingLabel:"px:Foot2EndnoteParagraphStyleSplitHeading",

	pStyleEndnoteSplitHeadingPreceding:undefined,
	pStyleEndnoteSplitHeadingPrecedingIndex:0,
	pStyleEndnoteSplitHeadingPrecedingLabel:"px:Foot2EndnoteParagraphStyleSplitHeadingPreceding",

	pStyleEndnoteSplitHeadingPrecedingRepeat:undefined,
	pStyleEndnoteSplitHeadingPrecedingRepeatIndex:0,
	pStyleEndnoteSplitHeadingPrecedingRepeatLabel:"px:Foot2EndnoteParagraphStyleSplitHeadingPrecedingRepeat",

	pStyleEndnoteSplitHeadingPrecedingCopy:false,
	pStyleEndnoteSplitHeadingPrecedingCopyLabel:"px:Foot2EndnoteParagraphStyleSplitHeadingPrecedingCopy",
	
	pStyleEndnoteSplitHeadingFollowing:undefined,
	pStyleEndnoteSplitHeadingFollowingIndex:0,
	pStyleEndnoteSplitHeadingFollowingLabel:"px:Foot2EndnoteParagraphStyleSplitHeadingFollowing",

	pStyleEndnoteSplitHeadingFollowingRepeat:undefined,
	pStyleEndnoteSplitHeadingFollowingRepeatIndex:0,
	pStyleEndnoteSplitHeadingFollowingRepeatLabel:"px:Foot2EndnoteParagraphStyleSplitHeadingRepeatFollowing",

	footnoteIgnore:false,
	footnoteIgnoreLabel:"px:Foot2EndnoteFootnoteIgnore",
	
	pStyleFootnoteIgnore:undefined,
	pStyleFootnoteIgnoreIndex:0,
	pStyleFootnoteIgnoreLabel:"px:Foot2EndnoteParagraphStyleFootnoteIgnore",
	

	pStyleEndnoteSplitHeadingFollowingCopy:false,
	pStyleEndnoteSplitHeadingFollowingCopyLabel:"px:Foot2EndnoteParagraphStyleSplitHeadingFollowingCopy",
	
	cStyleEndnoteMarker:undefined,
	cStyleEndnoteMarkerIndex:0,
	cStyleEndnoteMarkerLabel:"px:Foot2EndnoteCharacterStyle",	
	
	dokParagraphStylePrefixes:[],
	dokParagraphStylePrefixStyles:[],
	
	pStylePrefixMarkerLabel:"px:Foot2EndnoteSplitPrefix",
	numberBySectionLabel:"px:numberBySection",
	
	scriptVersionLabel:"px:Foot2EndnoteVersion",
	scriptMajorVersion:"2",
	
	foot2EndCounter:0,
	debug:false,
	showGui:true,
	logFileName:"endnoteLog.txt",
	ids:undefined,
	version:"2.0-2016-05-31"
}
