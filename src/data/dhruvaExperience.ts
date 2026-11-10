export interface CinematicScene {
  id: string;
  order: number;
  stageName: string;
  devanagariTitle: string;
  environment: 'palace-court' | 'madhuvana-forest' | 'narada-darshan' | 'tapasya-fire' | 'polestar-sky';
  narration: string;
  sanskritVerse: string;
  scriptureReference: string;
  interactionPrompt: string;
  interactionType: 'tap-to-step' | 'drag-mist' | 'chant-syllables' | 'hold-breath' | 'gaze-polestar';
  soundCue: 'court-echo' | 'forest-night' | 'veena-chime' | 'tapasya-drone' | 'cosmic-harps';
  dialogue?: {
    speaker: string;
    text: string;
  }[];
}

export const DHRUVA_CINEMATIC_STORY: {
  title: string;
  devanagari: string;
  canonicalSource: string;
  synopsis: string;
  scenes: CinematicScene[];
} = {
  title: 'The Unshakeable Resolve of Dhruva Maharaj',
  devanagari: 'ध्रुवचरितम् — दृढसङ्कल्पः',
  canonicalSource: 'Srimad Bhagavatam, Canto 4, Chapters 8–12',
  synopsis: 'A five-year-old prince, pierced by caustic words in his father’s court, journeys into the dark forest of Madhuvana. Guided by Sri Narada Muni, his five-month austerity arrests the breath of the cosmos until the Supreme Lord appears.',
  scenes: [
    {
      id: 'scene-1-court',
      order: 1,
      stageName: 'Act I: The Piercing Word',
      devanagariTitle: 'उत्तानपादसभा — वाग्बाणप्रहारः',
      environment: 'palace-court',
      narration: 'In the royal hall of King Uttanapada, young Prince Dhruva approached to sit upon his father\'s lap. But Queen Suruchi, steeped in pride, cast him away with stinging words: "You do not deserve the king’s throne, for you were not born from my womb. Seek the forest and worship the Supreme Lord if you desire an exalted place."',
      sanskritVerse: 'न वत्स नृपतेर्धिष्ण्यं भवानारोढुमर्हति। न गृहीतो यदालम्भो ममोदरसमुद्भवः॥ (SB 4.8.10)',
      scriptureReference: 'Srimad Bhagavatam 4.8.10–14',
      interactionPrompt: 'Touch the burning throne to witness his mother Suniti’s sacred counsel.',
      interactionType: 'tap-to-step',
      soundCue: 'court-echo',
      dialogue: [
        {
          speaker: 'Suruchi',
          text: 'Aspire not for the throne, child! Worship the Supreme Lord Hari through severe penance if you seek sovereign glory.',
        },
        {
          speaker: 'Mother Suniti',
          text: 'My child, do not hold malice against anyone. Suruchi spoke harsh words, yet her counsel is true: Lord Hari alone dispels all sorrows. Take shelter of His lotus feet.',
        },
      ],
    },
    {
      id: 'scene-2-forest',
      order: 2,
      stageName: 'Act II: The Dark Forest of Madhuvana',
      devanagariTitle: 'मधुवनप्रवेशः — यमुनातीरे',
      environment: 'madhuvana-forest',
      narration: 'Armed with unyielding resolve and his mother’s blessing, the five-year-old prince marched alone into the perilous wilderness of Madhuvana on the banks of the sacred Yamuna.',
      sanskritVerse: 'तात गच्छ ध्रुवं भद्रं ते यमुनायास्तटं शुचि। पुण्यं मधुवनं यत्र सांनिध्यं नित्यदा हरेः॥ (SB 4.8.42)',
      scriptureReference: 'Srimad Bhagavatam 4.8.42',
      interactionPrompt: 'Swipe to clear the deep forest mist of Madhuvana.',
      interactionType: 'drag-mist',
      soundCue: 'forest-night',
    },
    {
      id: 'scene-3-narada',
      order: 3,
      stageName: 'Act III: The Descent of Narada Muni',
      devanagariTitle: 'देवर्षिदर्शनम् — मन्त्रोपदेशः',
      environment: 'narada-darshan',
      narration: 'Testing the child’s determination, Devarshi Narada appeared with his celestial Mahati veena. Finding Dhruva’s resolve unshaken even by the threat of wild beasts and ascetic rigors, the sage touched the boy’s head and transmitted the sacred twelve-syllable Dvadashakshara mantra.',
      sanskritVerse: 'ॐ नमो भगवते वासुदेवाय। जपस्त्वयं वन्द्यतमो मन्त्रः सर्वार्थसाधकः॥',
      scriptureReference: 'Srimad Bhagavatam 4.8.54',
      interactionPrompt: 'Tap each sacred syllable in sequence: ॐ • न • मो • भ • ग • व • ते • वा • सु • दे • वा • य',
      interactionType: 'chant-syllables',
      soundCue: 'veena-chime',
    },
    {
      id: 'scene-4-tapasya',
      order: 4,
      stageName: 'Act IV: The Cosmic Breath Arrested',
      devanagariTitle: 'घोरतपस्या — प्राणायामस्य प्रभावः',
      environment: 'tapasya-fire',
      narration: 'Month after month, Dhruva’s austerity deepened. First subsisting on fruits, then dry leaves, then mere water, then air alone. By the fifth month, standing on a single leg, he restrained his breath and fixed his total consciousness upon Lord Vishnu within his heart. As his breath paused, the total cosmic breath of all three worlds was arrested.',
      sanskritVerse: 'यस्मिन् धारयमाणेऽसौ ध्रुवेणात्मानमात्मना। लोका नमन्ति भूपास्तद् वायुं संनिरुध्य च॥ (SB 4.8.80)',
      scriptureReference: 'Srimad Bhagavatam 4.8.71–80',
      interactionPrompt: 'Hold your finger down to still your breath with Dhruva and arrest the cosmic vortex.',
      interactionType: 'hold-breath',
      soundCue: 'tapasya-drone',
    },
    {
      id: 'scene-5-darshan',
      order: 5,
      stageName: 'Act V: The Eternal Pole Star (Dhruva-Loka)',
      devanagariTitle: 'भगवद्दर्शनम् — ध्रुवलोकप्राप्तिः',
      environment: 'polestar-sky',
      narration: 'Lord Hari appeared riding Garuda in blinding radiance. Touching Dhruva’s cheek with His Panchajanya conch shell, the child burst into profound Vedic praise. The Lord bestowed upon him Dhruva-Loka—the supreme pivot of the heavens around which the Saptarishi (Great Bear) and all stellar galaxies endlessly revolve until cosmic dissolution.',
      sanskritVerse: 'स वै धिया योगपथेन शश्वत् समाहितोऽनन्यतया यतासुः। तस्मिन् दधार रूपं यत् साक्षात् तत् पुरतोऽपश्यत्॥ (SB 4.9.1)',
      scriptureReference: 'Srimad Bhagavatam 4.9.1–26',
      interactionPrompt: 'Gaze into the night sky to witness the constellations revolving around the unshakeable devotee.',
      interactionType: 'gaze-polestar',
      soundCue: 'cosmic-harps',
    },
  ],
};

