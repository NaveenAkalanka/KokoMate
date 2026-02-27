# KokoMate - Application Summary
*Calculate exact installments & merchant fees.*

**KokoMate** is a Smart Buy-Now-Pay-Later (BNPL) calculator utility designed specifically for Sri Lankan shoppers to easily compute their exact initial and monthly installment payments avoiding hidden calculations. It is a cross-platform progressive web application (PWA) packaged into a native Android app.

---

## 🎯 Core Features

### User Inputs
1. **Store Price**: The total retail price of the item.
2. **Cash Down**: Any immediate upfront cash payment the user wishes to make to reduce the financed amount.
3. **Merchant Surcharge Rate**: The percentage surcharge applied by the merchant (Preset buttons for 8%, 10%, 12%, or a custom input field).
4. **Installment Split**: Toggle between 3-month or 6-month payment schedules.

### Automatically Calculated Results
- **First Installment**: The scheduled amount to be paid every month.
- **Total Due Today**: The sum of the cash down payment and the very first installment.
- **Amount to Finance**: The remaining principal balance after the cash down payment, before the surcharge is applied.
- **Total Surcharge**: The extra fee added to the principal based on the merchant's percentage rate.
- **Total Payable**: The final grand total out-of-pocket cost over the entire lifecycle (Cash Down + Financed Amount + Surcharge).

---

## 🧮 Mathematical Logic & Formulas

The core logic of KokoMate resides in `src/lib/calculator.ts`. 

Given:
- `Price` = Store Price
- `Down` = Cash Down Payment
- `Rate` = Merchant Surcharge Rate (%)
- `Months` = Number of Installments (3 or 6)

The calculations are performed as follows:
1. **Principal** = `Price` - `Down`
2. **Total Surcharge** = `Principal` * (`Rate` / 100)
3. **Amount to Finance** = `Principal` + `Total Surcharge`
4. **Monthly Installment** = `Amount to Finance` / `Months`
5. **Total Due Today** = `Down` + `Monthly Installment`
6. **Total Payable** = `Down` + `Amount to Finance`

---

## 🛠️ Technical Stack

- **Framework**: Next.js 16 (React / TypeScript)
- **Styling**: Tailwind CSS for utility-first layout generation.
- **UI Components**: custom `shadcn/ui` integration (Cards, Inputs, Labels, Switches, and ToggleGroups).
- **PWA Capabilities**: `next-pwa` integration for offline caching (`sw.js`).
- **Native Android Bridging**: CapacitorJS (`@capacitor/core`, `@capacitor/android`).

---

## 📱 UI & UX Highlights

- **Dynamic Screen Adaptation**: The layout uses mathematical Flexbox constraints (`gap-4`, `flex-col`, `justify-center`) rather than hard paddings, ensuring the form and results cards slide dynamically and fit perfectly without wasteful vertical gaps on any Android device screen.
- **Notch & Safe Area Awareness**: The root wrapper uses the CSS `env(safe-area-inset-*)` functions to prevent UI elements from hiding behind Android camera notches or navigation gesture bars.
- **Native Numeric Keyboards**: Text inputs intelligently use `type="text"` combined with `inputMode="decimal"` to enforce the appearance of the native Android numeric dial-pad while bypassing strict HTML5 keyboard validation lockups on partial decimal strings.
- **Automated App Icons**: Android adaptive icons (`mipmap` folders) and splash screens are dynamically generated from customized vector SVGs using the `@capacitor/assets` library, ensuring perfect centering regardless of the OS launcher crop.

---

## 📁 Key Files & Directory Structure

- `src/app/page.tsx` - The main application entry point that applies global background styles and Safe Area insets.
- `src/components/Calculator.tsx` - The primary stateful component. Handles all the UI tracking for user inputs and recursively triggers updates to the calculations display.
- `src/lib/calculator.ts` - A decoupled, pure TypeScript function file that strictly handles mathematically secure BNPL installment equations.
- `kokomate-android/` - The dedicated Capacitor project folder containing the native Java/Kotlin Android App shell (`AndroidManifest.xml`, `gradlew`, etc.) built tightly around the `out/` Next.js directory.
- `public/logo_icon.svg` & `public/logo_full.svg` - Core vector assets utilized for both web page embedding and OS-level app icon generation.
