// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random quote to the page.
 */
function addRandomQuote() {
  const quotes =
      [ "If you're the CEO of a company, and you're dumb enough" +
        "to leave your log-in info on a Post-It note on your desk, while the people" +
        "that you ripped off are physically in your office, it's not a hack. It's" +
        "barely social engineering. It’s more like natural selection.",

        "If the rise of an all-powerful intelligence is inevitable, well it stands to" +
        "reason that when they take power, our digital overlords will punish those of us" +
        "who did not help them get there. Ergo, I would like to be a helpful idiot." +
        "Like yourself.",

        "War does not determine who is right- only who is left",
        
        "Nothing's perfect, the world's not perfect, but it's there for us, trying" +
        "the best it can. That's what makes it so damn beautiful.",

        "Before I leaped, I should have seen the view from halfway down", 

        "When you look at someone through rose-colored glasses," +
        "all the red flags just look like flags ",

        "Sometimes I'll start a sentence and I don't even know where it's going." +
        "I just hope I find it along the way",

        "Mini cupcakes? As in the mini version of regular cupcakes?" + 
        "Which is already a mini version of cake?" + 
        "Honestly, where does it end with you people?",

        "Whenever I'm about to do something, I think," +
        "'Would an idiot do that?' and if they would, I do not do that thing",

        "The doctor said, if I can't find a new way to relate more positively" +
        "to my surroundings, I'm going to die. I'm going to die",

        "I'm not superstitious, but I am a little stitious.",

        "Pirates are evil? The Marines are righteous?... Justice will prevail, you say?" + 
        "But of course it will! Whoever wins this war becomes justice!",

        "When do you think people die? When they are shot through the heart by the bullet" +
        "of a pistol? No. When they are ravaged by an incurable disease? No..." +
        "It’s when they're forgotten!",

        "Stop counting only those things you have lost! What is gone, is gone!" + 
        "So ask yourself this. What is there... that still remains to you?!",
        ];

  // Pick a random quote.
  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  // Add it to the page.
  const quoteContainer = document.getElementById('quote-container');
  quoteContainer.innerText = quote;
}
