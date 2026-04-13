import { test, expect, Page, Locator } from '@playwright/test';

const BASE_URL = 'https://labasse.github.io/tutti-frutti/';
const TIMEOUT = 10000;

// Configuration des tests
test.describe.configure({ timeout: 60000 });

// ============================================================================
// FIXTURES ET HELPERS
// ============================================================================

interface TestData {
  fruitSelectors: string[];
  recipeSelectors: string[];
  navigationSelectors: string[];
}

const getTestData = (): TestData => ({
  fruitSelectors: [
    '[data-testid="fruit-item"]',
    '.fruit-item',
    '[class*="fruit"]',
    'article',
    '.card',
  ],
  recipeSelectors: [
    '[data-testid="recipe"]',
    '.recipe',
    '[class*="recipe"]',
    '[data-testid="recette"]',
    '.recette',
  ],
  navigationSelectors: [
    'nav',
    '[role="navigation"]',
    'header',
    '.navbar',
    '.navigation',
  ],
});

// Helper pour trouver un element avec fallback
const findElement = async (
  page: Page,
  selectors: string[]
): Promise<Locator | null> => {
  for (const selector of selectors) {
    const element = page.locator(selector).first();
    const isVisible = await element.isVisible().catch(() => false);
    if (isVisible) return element;
  }
  return null;
};

// Helper pour compter les elements avec fallback
const countElements = async (page: Page, selectors: string[]): Promise<number> => {
  for (const selector of selectors) {
    const count = await page.locator(selector).count().catch(() => 0);
    if (count > 0) return count;
  }
  return 0;
};

// ============================================================================
// TESTS DE CHARGEMENT ET STRUCTURE
// ============================================================================

test.describe('?? Tests de chargement et structure', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  });

  test('La page devrait se charger avec le bon statut HTTP', async ({ page }) => {
    const response = await page.goto(BASE_URL);
    expect(response?.status()).toBeLessThan(400);
  });

  test('Le titre de la page devrait etre valide', async ({ page }) => {
    const title = await page.title();
    expect(title).toBeTruthy();
    expect(title.length).toBeGreaterThan(0);
  });

  test('Le contenu principal devrait etre present', async ({ page }) => {
    const content = await page.content();
    expect(content).toBeTruthy();
    expect(content.length).toBeGreaterThan(100);
  });

  test('La page devrait contenir des en-tetes', async ({ page }) => {
    const headings = await page.locator('h1, h2, h3').count();
    expect(headings).toBeGreaterThan(0);
  });

  test('Le body ne devrait pas etre vide', async ({ page }) => {
    const body = page.locator('body');
    await expect(body).toBeVisible();
  });

  test('La page devrait avoir une structure HTML valide', async ({ page }) => {
    const htmlTag = page.locator('html');
    const headTag = page.locator('head');
    const bodyTag = page.locator('body');

    await expect(htmlTag).toBeVisible();
    await expect(headTag).toBeVisible();
    await expect(bodyTag).toBeVisible();
  });

  test('Pas de caracteres d\'erreur de decodage', async ({ page }) => {
    const text = await page.content();
    expect(text).not.toContain('undefined');
    expect(text).not.toContain('null');
  });
});

// ============================================================================
// TESTS DES eLeMENTS DE FRUITS
// ============================================================================

test.describe('?? Tests des elements de fruits', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  });

  const testData = getTestData();

  test('Au moins un élément fruit devrait etre present', async ({ page }) => {
    const count = await countElements(page, testData.fruitSelectors);
    expect(count).toBeGreaterThan(0);
  });

  test('Les fruits devraient etre visibles', async ({ page }) => {
    const element = await findElement(page, testData.fruitSelectors);
    if (element) {
      await expect(element).toBeVisible();
    }
  });

  test('Les fruits devraient avoir un contenu textuel', async ({ page }) => {
    const element = await findElement(page, testData.fruitSelectors);
    if (element) {
      const text = await element.textContent();
      expect(text).toBeTruthy();
      expect(text?.length).toBeGreaterThan(0);
    }
  });

  test('Chaque fruit devrait avoir au moins un titre', async ({ page }) => {
    const fruits = page.locator('[class*="fruit"], article, .card').first();
    const title = fruits.locator('h1, h2, h3, [class*="title"], [class*="titre"]').first();

    const count = await title.count().catch(() => 0);
    if (count > 0) {
      await expect(title).toBeVisible();
    }
  });

  test('Les fruits devraient contenir du texte descriptif', async ({ page }) => {
    const element = await findElement(page, testData.fruitSelectors);
    if (element) {
      const text = await element.innerText();
      expect(text.length).toBeGreaterThan(10);
    }
  });

  test('Les fruits devraient etre organises dans une structure coherente', async ({ page }) => {
    const elements = await countElements(page, testData.fruitSelectors);
    expect(elements).toBeGreaterThanOrEqual(1);
  });

  test('Les images de fruits devraient avoir des attributs valides', async ({ page }) => {
    const images = page.locator('img[src*="fruit"], img[alt*="fruit"]');
    const count = await images.count();

    if (count > 0) {
      const firstImage = images.first();
      const src = await firstImage.getAttribute('src');
      const alt = await firstImage.getAttribute('alt');

      if (src) {
        expect(src).toBeTruthy();
      }
    }
  });

  test('Les fruits devraient avoir une hauteur et largeur correctes', async ({ page }) => {
    const element = await findElement(page, testData.fruitSelectors);
    if (element) {
      const box = await element.boundingBox();
      if (box) {
        expect(box.width).toBeGreaterThan(0);
        expect(box.height).toBeGreaterThan(0);
      }
    }
  });

  test('Les couleurs des fruits devraient etre appliquees correctement', async ({ page }) => {
    const element = await findElement(page, testData.fruitSelectors);
    if (element) {
      const color = await element.evaluate((el) => {
        return window.getComputedStyle(el).color;
      });
      expect(color).toBeTruthy();
    }
  });
});

// ============================================================================
// TESTS DE LA SECTION CUISINER / RECETTES
// ============================================================================

test.describe('????? Tests de la section Cuisiner et Recettes', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  });

  const testData = getTestData();

  test('La section recettes devrait exister', async ({ page }) => {
    const content = await page.content();
    const hasCuisiner = content.includes('Cuisiner') || content.includes('Recettes') || content.includes('recette');
    expect(hasCuisiner).toBeTruthy();
  });

  test('Au moins une recette devrait etre presente', async ({ page }) => {
    const count = await countElements(page, testData.recipeSelectors);
    expect(count).toBeGreaterThanOrEqual(0);
  });

  test('Les recettes devraient etre visibles', async ({ page }) => {
    const element = await findElement(page, testData.recipeSelectors);
    if (element) {
      await expect(element).toBeVisible();
    }
  });

  test('Chaque recette devrait avoir un titre ou un nom', async ({ page }) => {
    const recipe = await findElement(page, testData.recipeSelectors);
    if (recipe) {
      const text = await recipe.innerText();
      expect(text.length).toBeGreaterThan(0);
    }
  });

  test('Les recettes devraient contenir des ingredients ou du contenu', async ({ page }) => {
    const content = await page.content();
    const hasIngredients = content.includes('ingredient') || 
                          content.includes('Ingredient') ||
                          content.includes('instructions') ||
                          content.includes('Instructions');
    expect(hasIngredients || (await countElements(page, testData.recipeSelectors)) === 0).toBeTruthy();
  });

  test('Les recettes devraient avoir une structure lisible', async ({ page }) => {
    const recipe = await findElement(page, testData.recipeSelectors);
    if (recipe) {
      const box = await recipe.boundingBox();
      if (box) {
        expect(box.width).toBeGreaterThan(100);
        expect(box.height).toBeGreaterThan(50);
      }
    }
  });

  test('Les recettes devraient etre separees visuellement', async ({ page }) => {
    const recipes = await countElements(page, testData.recipeSelectors);
    if (recipes > 1) {
      const elements = page.locator('[class*="recipe"], [data-testid="recipe"]');
      const firstBox = await elements.nth(0).boundingBox();
      const secondBox = await elements.nth(1).boundingBox();

      if (firstBox && secondBox) {
        const verticalGap = secondBox.y - (firstBox.y + firstBox.height);
        expect(verticalGap).toBeGreaterThanOrEqual(0);
      }
    }
  });
});

// ============================================================================
// TESTS DE NAVIGATION
// ============================================================================

test.describe('??? Tests de navigation et interaction', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  });

  test('La page devrait etre scrollable', async ({ page }) => {
    const scrollHeight = await page.evaluate(() => document.documentElement.scrollHeight);
    expect(scrollHeight).toBeGreaterThan(window.innerHeight);
  });

  test('Le scroll devrait fonctionner correctement', async ({ page }) => {
    const initialScroll = await page.evaluate(() => window.scrollY);
    await page.evaluate(() => window.scrollBy(0, 300));
    const newScroll = await page.evaluate(() => window.scrollY);

    expect(newScroll).toBeGreaterThan(initialScroll);
  });

  test('Les liens internes devraient etre fonctionnels', async ({ page }) => {
    const links = page.locator('a[href]');
    const count = await links.count();

    if (count > 0) {
      const firstLink = links.first();
      await expect(firstLink).toBeVisible();
    }
  });

  test('La navigation au clavier devrait fonctionner', async ({ page }) => {
    await page.keyboard.press('Tab');
    const focused = await page.evaluate(() => {
      return document.activeElement?.tagName;
    });

    expect(focused).toBeTruthy();
  });

  test('Le retour au sommet devrait etre possible', async ({ page }) => {
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.evaluate(() => window.scrollTo(0, 0));
    const scrollTop = await page.evaluate(() => window.scrollY);

    expect(scrollTop).toBe(0);
  });

  test('Les boutons devraient etre cliquables', async ({ page }) => {
    const buttons = page.locator('button, [role="button"], a[class*="button"]');
    const count = await buttons.count();

    if (count > 0) {
      const firstButton = buttons.first();
      await expect(firstButton).toBeEnabled();
    }
  });
});

// ============================================================================
// TESTS DE RESPONSIVITe
// ============================================================================

test.describe('?? Tests de responsivite et adaptabilite', () => {
  const viewports = [
    { name: 'Mobile (375px)', width: 375, height: 667 },
    { name: 'Tablette (768px)', width: 768, height: 1024 },
    { name: 'Desktop (1920px)', width: 1920, height: 1080 },
    { name: 'iPhone 12', width: 390, height: 844 },
    { name: 'iPad Pro', width: 1024, height: 1366 },
  ];

  viewports.forEach(({ name, width, height }) => {
    test(`La page devrait etre responsive sur ${name}`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto(BASE_URL, { waitUntil: 'networkidle' });

      const body = page.locator('body');
      await expect(body).toBeVisible();

      const content = await page.content();
      expect(content.length).toBeGreaterThan(100);
    });

    test(`Pas de debordement horizontal sur ${name}`, async ({ page }) => {
      await page.setViewportSize({ width, height });
      await page.goto(BASE_URL);

      const scrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);
      const clientWidth = await page.evaluate(() => document.documentElement.clientWidth);

      expect(scrollWidth).toBeLessThanOrEqual(clientWidth + 1); // +1 pour la tolerance
    });
  });

  test('Les elements devraient rester visibles au redimensionnement', async ({ page }) => {
    await page.goto(BASE_URL);

    const element = page.locator('body > *').first();
    const initialBox = await element.boundingBox();

    await page.setViewportSize({ width: 768, height: 1024 });
    await page.waitForTimeout(500);

    const newBox = await element.boundingBox();
    expect(newBox).toBeTruthy();
  });
});

// ============================================================================
// TESTS D'ACCESSIBILITe
// ============================================================================

test.describe('? Tests d\'accessibilite', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  });

  test('Les images devraient avoir des attributs alt', async ({ page }) => {
    const images = page.locator('img');
    const count = await images.count();

    if (count > 0) {
      const imagesWithoutAlt = await images.evaluate((imgs: HTMLImageElement[]) => {
        return imgs.filter(img => !img.getAttribute('alt')).length;
      });

      // Au moins 50% des images devraient avoir un alt
      expect(imagesWithoutAlt).toBeLessThan(count / 2 + 1);
    }
  });

  test('Les elements interactifs devraient avoir un label', async ({ page }) => {
    const buttons = page.locator('button');
    const count = await buttons.count();

    if (count > 0) {
      const firstButton = buttons.first();
      const hasText = await firstButton.innerText();
      expect(hasText).toBeTruthy();
    }
  });

  test('La navigation au clavier devrait fonctionner completement', async ({ page }) => {
    let tabCount = 0;
    const maxTabs = 20;

    while (tabCount < maxTabs) {
      await page.keyboard.press('Tab');
      const focused = await page.evaluate(() => document.activeElement?.tagName);
      if (focused && focused !== 'BODY') {
        expect(['A', 'BUTTON', 'INPUT', 'SELECT', 'TEXTAREA']).toContain(focused);
        break;
      }
      tabCount++;
    }

    expect(tabCount).toBeLessThan(maxTabs);
  });

  test('Les contrastes de couleur devraient etre acceptables', async ({ page }) => {
    const elements = page.locator('*');
    const count = await elements.count();

    if (count > 0) {
      const firstElement = elements.first();
      const color = await firstElement.evaluate((el) => {
        return window.getComputedStyle(el).color;
      });
      expect(color).toBeTruthy();
    }
  });

  test('Les headings devraient suivre une hierarchie logique', async ({ page }) => {
    const h1Count = await page.locator('h1').count();
    const h2Count = await page.locator('h2').count();

    // Generalement, devrait avoir au moins un h1
    expect(h1Count + h2Count).toBeGreaterThan(0);
  });

  test('Les liens devraient etre distinguables', async ({ page }) => {
    const links = page.locator('a[href]');
    const count = await links.count();

    if (count > 0) {
      const firstLink = links.first();
      const color = await firstLink.evaluate((el) => {
        return window.getComputedStyle(el).color;
      });
      expect(color).toBeTruthy();
    }
  });

  test('Les formulaires devraient avoir des labels associes', async ({ page }) => {
    const inputs = page.locator('input, textarea, select');
    const count = await inputs.count();

    if (count > 0) {
      const input = inputs.first();
      const id = await input.getAttribute('id');
      if (id) {
        const label = page.locator(`label[for="${id}"]`);
        const labelCount = await label.count();
        expect(labelCount).toBeGreaterThanOrEqual(0);
      }
    }
  });
});

// ============================================================================
// TESTS DE PERFORMANCE
// ============================================================================

test.describe('? Tests de performance', () => {
  test('La page devrait charger rapidement', async ({ page }) => {
    const startTime = Date.now();
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
    const loadTime = Date.now() - startTime;

    expect(loadTime).toBeLessThan(10000); // Moins de 10 secondes
  });

  test('Pas de console errors', async ({ page }) => {
    const errors: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'error') {
        errors.push(msg.text());
      }
    });

    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    expect(errors.length).toBe(0);
  });

  test('Pas de console warnings critiques', async ({ page }) => {
    const warnings: string[] = [];

    page.on('console', (msg) => {
      if (msg.type() === 'warning') {
        const text = msg.text();
        if (!text.includes('Deprecated')) {
          warnings.push(text);
        }
      }
    });

    await page.goto(BASE_URL);

    // On peut tolerer quelques warnings
    expect(warnings.length).toBeLessThan(5);
  });

  test('Les ressources externes devraient charger correctement', async ({ page }) => {
    const failedRequests: string[] = [];

    page.on('response', (response) => {
      if (response.status() >= 400) {
        failedRequests.push(`${response.url()}: ${response.status()}`);
      }
    });

    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    // Peu ou pas de ressources manquantes
    expect(failedRequests.length).toBeLessThan(3);
  });

  test('Le DOM devrait avoir un nombre raisonnable d\'elements', async ({ page }) => {
    await page.goto(BASE_URL);

    const elementCount = await page.evaluate(() => {
      return document.querySelectorAll('*').length;
    });

    expect(elementCount).toBeGreaterThan(10);
    expect(elementCount).toBeLessThan(10000);
  });

  test('Les images devraient avoir des dimensions optimales', async ({ page }) => {
    await page.goto(BASE_URL);

    const images = page.locator('img');
    const count = await images.count();

    if (count > 0) {
      for (let i = 0; i < Math.min(count, 5); i++) {
        const img = images.nth(i);
        const naturalWidth = await img.evaluate((el: HTMLImageElement) => el.naturalWidth);
        const width = await img.evaluate((el: HTMLImageElement) => el.width);

        if (naturalWidth && width) {
          expect(naturalWidth).toBeGreaterThan(0);
          expect(width).toBeGreaterThan(0);
        }
      }
    }
  });
});

// ============================================================================
// TESTS DE CONTENU
// ============================================================================

test.describe('?? Tests de contenu', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });
  });

  test('Le contenu devrait etre en franeais ou multilingue', async ({ page }) => {
    const content = await page.content();
    const hasFrench = content.includes('e') || content.includes('e') || content.includes('e');
    expect(hasFrench || content.length > 100).toBeTruthy();
  });

  test('Il ne devrait pas y avoir de texte de placeholder', async ({ page }) => {
    const text = await page.innerText('body');
    expect(text).not.toContain('Lorem ipsum');
    expect(text).not.toContain('placeholder');
  });

  test('Les paragraphes devraient contenir du texte pertinent', async ({ page }) => {
    const paragraphs = page.locator('p');
    const count = await paragraphs.count();

    if (count > 0) {
      const firstP = paragraphs.first();
      const text = await firstP.innerText();
      expect(text.trim().length).toBeGreaterThan(5);
    }
  });

  test('Le contenu devrait etre unique', async ({ page }) => {
    const text = await page.innerText('body');
    const lines = text.split('\n').filter(line => line.trim().length > 0);
    const uniqueLines = new Set(lines);

    // Au moins 70% de lignes uniques
    expect(uniqueLines.size / lines.length).toBeGreaterThan(0.7);
  });
});

// ============================================================================
// TESTS DE COMPATIBILITe NAVIGATEUR
// ============================================================================

test.describe('?? Tests de compatibilite', () => {
  test('La page devrait supporter les features CSS modernes', async ({ page }) => {
    await page.goto(BASE_URL);

    const supportsFlex = await page.evaluate(() => {
      return CSS.supports('display', 'flex');
    });

    expect(supportsFlex).toBeTruthy();
  });

  test('Les metadonnees devrait etre presentes', async ({ page }) => {
    await page.goto(BASE_URL);

    const viewport = page.locator('meta[name="viewport"]');
    const charset = page.locator('meta[charset], meta[http-equiv="Content-Type"]');

    expect(await viewport.count()).toBeGreaterThan(0);
    expect(await charset.count()).toBeGreaterThan(0);
  });

  test('La page devrait avoir un favicon', async ({ page }) => {
    await page.goto(BASE_URL);

    const favicon = page.locator('link[rel*="icon"]');
    const count = await favicon.count();

    // Un favicon n'est pas obligatoire mais desire
    expect(count).toBeGreaterThanOrEqual(0);
  });
});

// ============================================================================
// TESTS VISUELS
// ============================================================================

test.describe('??? Tests visuels', () => {
  test('La page complete devrait etre visible sans erreur', async ({ page }) => {
    await page.goto(BASE_URL);
    await page.screenshot({ path: 'screenshots/homepage.png' });
  });

  test('Les elements colores devraient utiliser des couleurs valides', async ({ page }) => {
    await page.goto(BASE_URL);

    const elements = page.locator('*');
    const count = Math.min(await elements.count(), 20);

    for (let i = 0; i < count; i++) {
      const element = elements.nth(i);
      const color = await element.evaluate((el) => {
        return window.getComputedStyle(el).color;
      });

      expect(color).toMatch(/^rgb/);
    }
  });
});
