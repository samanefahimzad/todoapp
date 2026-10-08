Frågor om koden:
Jag använder useState för att hålla reda på mina uppgifter i appen.
todos är min lista med alla uppgifter. Varje uppgift har ett id, en text och done. done visar om uppgiften är klar eller inte. false betyder inte klar och true betyder klar.
Jag har också draft, som håller reda på det jag skriver i input-fältet.
När jag lägger till, tar bort eller ändrar en uppgift använder jag setTodos för att ändra listan. När informationen ändras uppdaterar React sidan automatiskt så att jag ser den nya informationen.
Till exempel när jag klickar på checkboxen ändras done, och då ändras uppgiften direkt på sidan.

Man ska inte använda .push() eftersom den ändrar den gamla arrayen direkt.
I React skapar jag istället en ny array när jag ändrar mina uppgifter.
När jag lägger till använder jag ...todos och setTodos.
När jag tar bort använder jag filter för att skapa en ny lista utan uppgiften.

Kodgranskning:
Koden försöker lägga till en ny uppgift i listan, men .push() ändrar den gamla arrayen direkt, vilket man inte ska göra med state i React. Ett bättre sätt är att skapa en ny array med ...todos och sedan lägga till den nya uppgiften.

function addTodo(todos, text) {
  return [...todos, text];
}
Problemlösning & Reflektion:
I början var det mycket text i instruktionen och jag hade svårt att förstå vad jag skulle göra. Jag använde AI för att få en enklare förklaring och för att dela upp uppgiften i mindre delar. Det gjorde det lättare för mig att förstå vad varje del handlade om och hur allt hänger ihop. Sedan kunde jag ta en del i taget och försöka lösa den själv.

