export type MedalType = 'gold' | 'silver' | 'bronze' | 'platinum' | 'double-gold';

export interface Award {
  id: string;
  name: string;
  nameAr?: string;
  competition: string;
  year: number;
  medal: MedalType;
  country: string;
}

export const awards: Award[] = [
  // 2024 Awards
  {
    id: 'nyooc-2024',
    name: 'Médaille d\'argent',
    nameAr: 'ميدالية فضية',
    competition: 'New York International Olive Oil Competition (NYIOOC)',
    year: 2024,
    medal: 'silver',
    country: 'USA',
  },
  {
    id: 'carthage-2024',
    name: 'Double Gold Medal',
    nameAr: 'ميدالية ذهبية مزدوجة',
    competition: 'Carthage IOOC - International Olive Oil Competition',
    year: 2024,
    medal: 'double-gold',
    country: 'Tunisia',
  },
  {
    id: 'istanbul-2024',
    name: 'Médaille Platinium',
    nameAr: 'ميدالية بلاتينية',
    competition: 'Olive Istanbul IOOC',
    year: 2024,
    medal: 'platinum',
    country: 'Turkey',
  },
  {
    id: 'london-2024',
    name: 'Médaille d\'or',
    nameAr: 'ميدالية ذهبية',
    competition: 'London International Olive Oil Competitions (IOOC)',
    year: 2024,
    medal: 'gold',
    country: 'UK',
  },
  {
    id: 'japan-2024',
    name: 'Médaille d\'or',
    nameAr: 'ميدالية ذهبية',
    competition: 'Japan International Extra Virgin Olive Oil Competition',
    year: 2024,
    medal: 'gold',
    country: 'Japan',
  },
  {
    id: 'china-2024',
    name: 'Médaille d\'or',
    nameAr: 'ميدالية ذهبية',
    competition: 'China International Olive Oil Competition',
    year: 2024,
    medal: 'gold',
    country: 'China',
  },
  {
    id: 'evooleum-2024',
    name: 'EVOOLEUM Awards 2024 Top 100',
    nameAr: 'جوائز إيفوليوم 2024 أفضل 100',
    competition: 'EVOOLEUM Top 100 Best Olive Oils',
    year: 2024,
    medal: 'gold',
    country: 'Spain',
  },
  {
    id: 'italy-2024',
    name: 'Médaille d\'or',
    nameAr: 'ميدالية ذهبية',
    competition: 'ITALY EVO INTERNATIONAL OLIVE OIL Competition',
    year: 2024,
    medal: 'gold',
    country: 'Italy',
  },
  // 2023 Awards
  {
    id: 'italy-2023',
    name: 'Médaille d\'or',
    nameAr: 'ميدالية ذهبية',
    competition: 'ITALY EVO INTERNATIONAL OLIVE OIL Competition',
    year: 2023,
    medal: 'gold',
    country: 'Italy',
  },
  {
    id: 'china-2023',
    name: 'Médaille d\'or',
    nameAr: 'ميدالية ذهبية',
    competition: 'China International Olive Oil Competition',
    year: 2023,
    medal: 'gold',
    country: 'China',
  },
  {
    id: 'athens-2023',
    name: 'Médaille d\'or',
    nameAr: 'ميدالية ذهبية',
    competition: 'Athènes International Olive Oil Competition',
    year: 2023,
    medal: 'gold',
    country: 'Greece',
  },
  {
    id: 'japan-2023',
    name: 'Médaille d\'or',
    nameAr: 'ميدالية ذهبية',
    competition: 'Japan International Extra Virgin Olive Oil Competition',
    year: 2023,
    medal: 'gold',
    country: 'Japan',
  },
  {
    id: 'evooleum-2023',
    name: 'EVOOLEUM 2023 - Meilleure Picholine & Meilleure huile du Maroc',
    nameAr: 'إيفوليوم 2023 - أفضل بيشولين وأفضل زيت من المغرب',
    competition: 'EVOOLEUM Awards',
    year: 2023,
    medal: 'gold',
    country: 'Spain',
  },
  {
    id: 'nyooc-2023',
    name: 'Médaille d\'or',
    nameAr: 'ميدالية ذهبية',
    competition: 'New York International Olive Oil Competition (NYIOOC)',
    year: 2023,
    medal: 'gold',
    country: 'USA',
  },
  {
    id: 'la-2023',
    name: 'Médaille d\'or',
    nameAr: 'ميدالية ذهبية',
    competition: 'Los Angeles Extra Virgin Olive Oil Competition',
    year: 2023,
    medal: 'gold',
    country: 'USA',
  },
  // 2021-2022 Awards
  {
    id: 'athens-2021',
    name: 'Médaille d\'or',
    nameAr: 'ميدالية ذهبية',
    competition: 'Athènes International Olive Oil Competition',
    year: 2021,
    medal: 'gold',
    country: 'Greece',
  },
  {
    id: 'nyooc-2021',
    name: 'Médaille d\'or',
    nameAr: 'ميدالية ذهبية',
    competition: 'New York International Olive Oil Competition (NYIOOC)',
    year: 2021,
    medal: 'gold',
    country: 'USA',
  },
  {
    id: 'berlin-2021',
    name: 'Médaille d\'or',
    nameAr: 'ميدالية ذهبية',
    competition: 'Berlin Global Olive Oil Awards (GOOA)',
    year: 2021,
    medal: 'gold',
    country: 'Germany',
  },
  {
    id: 'london-2021',
    name: 'Médaille d\'argent',
    nameAr: 'ميدالية فضية',
    competition: 'London International Olive Oil Competitions (IOOC)',
    year: 2021,
    medal: 'silver',
    country: 'UK',
  },
  {
    id: 'japan-2022',
    name: 'Médaille d\'argent',
    nameAr: 'ميدالية فضية',
    competition: 'Japan International Extra Virgin Olive Oil Competition',
    year: 2022,
    medal: 'silver',
    country: 'Japan',
  },
  {
    id: 'china-2021',
    name: 'Médaille d\'or',
    nameAr: 'ميدالية ذهبية',
    competition: 'China International Olive Oil Competition',
    year: 2021,
    medal: 'gold',
    country: 'China',
  },
  // 2020 & Earlier
  {
    id: 'athens-2020',
    name: 'Médaille d\'or',
    nameAr: 'ميدالية ذهبية',
    competition: 'Athènes International Olive Oil Competition',
    year: 2020,
    medal: 'gold',
    country: 'Greece',
  },
  {
    id: 'paris-2020',
    name: 'Médaille de bronze',
    nameAr: 'ميدالية برونزية',
    competition: 'Concours Paris Gourmet AVPA',
    year: 2020,
    medal: 'bronze',
    country: 'France',
  },
  {
    id: 'evooleum-2018',
    name: 'TOP 100 EVOOLEUM 2018',
    nameAr: 'أفضل 100 إيفوليوم 2018',
    competition: 'EVOOLEUM Top 100 Best Olive Oils',
    year: 2018,
    medal: 'gold',
    country: 'Spain',
  },
];

export const getAwardsByYear = (year: number) => 
  awards.filter(a => a.year === year);

export const getRecentAwards = (count = 10) => 
  awards.slice(0, count);

export const getAwardYears = () => 
  [...new Set(awards.map(a => a.year))].sort((a, b) => b - a);
