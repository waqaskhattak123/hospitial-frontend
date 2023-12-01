import React, { useState } from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
function Store() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(true);
  const [Loading, setloding] = useState(false);
  const medicineData = {
    headache: ["Medicine A", "Medicine B", "Medicine C"],
    cold: ["Medicine X", "Medicine Y", "Medicine Z"],
    fever: ["Medicine P", "Medicine Q", "Medicine R"],
    chest: ["Chest Medicine 1", "chest med 2", "chest med 3"],
    heart: ["heart Medicine 1", "heart med 2", "heart med 3"],
    heart1: ["heart Medicine 1", "heart med 2", "heart med 3"],
    Diphtheria: [
      "Erythromycin and penicillin are both recommended for the treatment of diphtheria. Some studies suggest that erythromycin may be better at eradication of the carrier state.",
      "Penicillin is recommended in household contacts who may not comply with the duration of erythromycin",
    ],
    coli: [
      "Antibiotics",
      "Cephalosporins, 3rd Generation.",
      "Penicillins, Amino Penicillins, Extended-Spectrum Fluoroquinolones",
    ],
    Giardiasis: [
      "Several drugs can be used to treat Giardia infection. Effective treatments include metronidazole, tinidazole, and nitazoxanide.",
      "Other medications include paromomycin, quinacrine, and furazolidone.",
    ],
    AIDS: [
      "HIV is treated with antiretroviral medicines, which work by stopping the virus replicating in the body",
      "This allows the immune system to repair itself and prevent further damage.",
    ],
    Infectious: [
      "Bacterial infections are treated with antibiotics such as amoxicillin, erythromycin and ciprofloxacin.",
      "There are many different types of antibiotic, with different ways of working; the choice depends on the type of infection you have.",
    ],
    mononucleosis: [
      "Mono symptoms usually go away on their own after a few weeks. The best treatment is getting plenty of rest, drinking lots of liquids and eating healthy. ",
      " You may give acetaminophen (Tylenol®) or ibuprofen (Motrin®) for sore throat, muscle aches or fever.",
    ],
    disease: [
      "A treatment is something that health care providers do for their patients to control a health problem, lessen its symptoms, or clear it up. Treatments can include medicine, therapy, surgery, or other approaches.",
    ],
    Malaria: [
      "The preferred antimalarial for interim oral treatment is artemether-lumefantrine (Coartem®) because of its fast onset of action. ",
      "Other oral options include atovaquone-proguanil (Malarone™), quinine, and mefloquine. IV or oral clindamycin and tetracyclines, such as doxycycline, are not adequate for interim treatment.",
    ],
    Measles: [
      "There is no specific medical treatment for measles. ",
      " To help manage symptoms: give your child plenty of fluids. encourage extra rest.",
    ],
    Meningitis: [
      "The drug of choice is ceftriaxone (2 g/day for 14-28 days). The alternative therapy is penicillin G (20 million U/day for 14-28 days).",
      "Doxycycline (100 mg orally or IV every 12 hours for 14-28 days) or chloramphenicol (1 g every 6 hours for 14-28 days) has also been used.",
    ],
    Mumps: [
      "Doxycycline (100 mg orally or IV every 12 hours for 14-28 days) or chloramphenicol (1 g every 6 hours for 14-28 days) has also been used",
    ],
    Poliomyelitis: [
      "There are no specific medications to treat polio. If you have paralytic polio, you'll receive physical therapy. ",
      "If your breathing muscles are weakened or paralyzed, you'll need mechanical ventilation, a machine that helps you breathe.",
    ],
    Pneumonia: [
      "In otherwise uncomplicated pneumonia, azithromycin is the initial drug of choice, as it covers most of the potential etiologic agents, including Mycoplasma species. Compared with other drugs,",
      "this agent also causes less GI upset, and it has the potential for good compliance because of its reduced dosing frequency.",
    ],
    Rocky: [
      "Patients with suspected RMSF should be treated with doxycycline for at least 3 days after the fever subsides and there is evidence of clinical improvement. Minimum course of treatment is 5-7 days.",
    ],
    mountain: [
      "Counseling helps you escape cravings and learn to manage what life throws at you without drugs or alcohol.",
      "Several counseling therapies treat substance use disorders. No one method is known to be better than another. Likewise, no one approach works for everyone with opiate addiction.",
    ],
    spotted: [
      "Doxycycline is the drug of choice for Rocky Mountain spotted fever (RMSF). It inhibits protein synthesis bacterial growth by binding to 30S and possibly 50S ribosomal subunits of susceptible bacteria. and, consequently,",
    ],
    fever: [
      "In the case of a high fever or a fever that causes discomfort, your care provider may recommend nonprescription medication,",
      " such as acetaminophen (Tylenol, others) or ibuprofen (Advil, Motrin IB, others). Use these medications according to the label instructions or as recommended by your health care provider.",
    ],
    Rubella: [
      "There is no specific medicine to treat rubella or make the disease go away faster. In many cases, symptoms are mild. For others, mild symptoms can be managed with bed rest and medicines",
      " for fever, such as acetaminophen. If you are concerned about your symptoms or your child's symptoms, contact your doctor.",
    ],
    Salmonella: [
      "Salmonella infections are commonly treated with fluoroquinolones or third-generation cephalosporins, such as ciprofloxacin and ceftriaxone.",
      "Enteric or typhoid fever is best treated with antibiotics for 5-7 days for uncomplicated cases and up to 10-14 days for a severe infection.",
    ],
    infections: [
      "Antibiotics are used to treat or prevent some types of bacterial infection.",
      "They kill bacteria or prevent them from reproducing and spreading.",
    ],
    Sexually: [
      "Sildenafil (Viagra) has a half-life of 4 hours and vardenafil (Levitra) has a half-life of 4-6 hours while tadalafil (Cialis) has a half-life of 17.5 hours.",
    ],
    transmitted: [
      "Bacterial STDs can be cured with antibiotics if treatment begins early enough. Viral STDs cannot be cured, but you can manage symptoms with medications. ",
    ],
    Tetanus: [
      "Metronidazole (500 mg intravenously [IV] every six to eight hours) is the preferred treatment for tetanus,",
      " but penicillin G (2 to 4 million units IV every four to six hours) is a safe and effective alternative [13]",
    ],
    Toxic: [
      "icity refers to how poisonous or harmful a substance can be. In pharmacology, drug toxicity occurs ",
      " when a person has accumulated too much of a prescription drug in their bloodstream, leading to negative effects.",
    ],
    shock: [
      "The treatment of shock includes the administration of endogenous catecholamines (epinephrine, norepinephrine, and dopamine)",
      "as well as various vaso-pressor agents that have shown efficacy in the treatment of the various types of shock.",
    ],
    syndrome: [
      "There's no specific treatment for Down syndrome. But there is a wide range of physical and developmental therapies",
      " people with Down syndrome reach their full potential. The earlier you start them, the better. Each child will have different needs.",
    ],
    Tuberculosis: [
      "The most common treatment for active TB is isoniazid INH in combination with three other drugs—rifampin, pyrazinamide and ethambutol. ",
      "You may begin to feel better only a few weeks after starting to take the drugs but treating TB takes much longer than other bacterial infections.",
    ],
    Viral: [
      "Antiviral agents tends to narrow in spectrum and have limited efficacy. The drugs used for viral infection are Acyclovir (Zovirax),",
      "amciclovir (Famvir), and valacyclovir (Valtrex) are effective against herpesvirus, including herpes zoster and herpes genitalis.",
    ],
    hepatitis: [
      "Grazoprevir is a protease inhibitor for hepatitis C genotypes 1 and 4. It's available only in combination with elbasvir  ",
    ],
    West: [
      "Commonly used first-line treatments for infants with infantile spasms include the following: ACTH. Vigabatrin. Prednisone.",
      "Commonly used first-line treatments for infants with infantile spasms include the following: ACTH. Vigabatrin. Prednisone.",
    ],
  };
  const [diseaseName, setDiseaseName] = useState("");
  const [recoveryMedicines, setRecoveryMedicines] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    setShow(true);
    setShow1(false);
    const lowerCaseDisease = diseaseName.toLowerCase();
    if (medicineData[lowerCaseDisease]) {
      setRecoveryMedicines(medicineData[lowerCaseDisease]);
    } else {
      setRecoveryMedicines(["No medicines found for the specified disease."]);
    }
  };
  return (
    <div>
      <Navbar />
      <h1 className="mb-4 h-14 text-xl bg-[#F6F6F6] text-center font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
        Plaese Enter you disease To get Medicine
      </h1>
      <form className="w-[800px] items-center ml-48">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none"></div>
          <input
            type="search"
            value={diseaseName}
            onChange={(e) => setDiseaseName(e.target.value)}
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            required
          />
          <button
            type="submit"
            onClick={handleSearch}
            className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>
      {show1 && (
        <p className="ml-48 mr-72 mt-9">
          <span className="text-xl text-green-500">
            Licensed and Accredited:
          </span>{" "}
          <br></br>
          Our Store licensed and accredited by the appropriate regulatory
          authorities in the region or country. This ensures that the store
          meets the legal and quality standards required for selling medications
          and healthcare products.<br></br>
          <span className="text-xl text-green-500">
            Knowledgeable Staff:
          </span>{" "}
          <br></br>
          The pharmacy have knowledgeable and licensed pharmacists and
          healthcare professionals who can provide accurate information, offer
          consultations, and assist customers in choosing the right medications
          and healthcare products.<br></br>
          <span className="text-xl text-green-500">
            Wide Range of Medications:
          </span>{" "}
          <br></br>A good pharmacy should a wide selection of prescription and
          over-the-counter medications to meet the diverse needs of its
          customers. This includes generic and brand-name medications.
        </p>
      )}
      <div>
        {Loading && (
          <div
            role="status"
            className="text-center items-center ml-64 mt-7 text-2xl"
          >
            <svg
              aria-hidden="true"
              className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="currentColor"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="currentFill"
              />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>
      {show && (
        <div className="ml-48">
          <h2 className="text-2xl font-bold dark:text-white mt-6">
            Your recovery Medicine Recovery Medicines:
          </h2>
          <ul>
            {recoveryMedicines.map((medicine, index) => (
              <li key={index}>{medicine}</li>
            ))}
            <Link to="/Payment">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Purchase medicine
              </button>
            </Link>
          </ul>
        </div>
      )}
      <div className="mt-36">
        <Footer />
      </div>
    </div>
  );
}

export default Store;
