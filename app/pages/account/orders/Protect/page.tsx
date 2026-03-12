import React from "react";

const PrivacyPolicy = () => {
  const lastUpdate = "12 mars 2026";

  return (
    <main className="max-w-4xl mx-auto p-6 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-4">
        Protection des Données Personnelles
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Dernière mise à jour : {lastUpdate}
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-600">
          1. Collecte des données
        </h2>
        <p>
          Nous collectons les informations nécessaires au traitement de vos
          commandes :
        </p>
        <ul className="list-disc ml-6 mt-2">
          <li>Identité (nom, prénom)</li>
          <li>Coordonnées (email, adresse de livraison)</li>
          <li>Données de paiement (via nos prestataires sécurisés)</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-600">
          2. Utilisation des données
        </h2>
        <p>Vos données sont utilisées exclusivement pour :</p>
        <ul className="list-disc ml-6 mt-2">
          <li>La gestion de vos commandes et livraisons.</li>
          <li>Le service après-vente.</li>
          <li>L'envoi de newsletters (uniquement avec votre consentement).</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3 text-blue-600">
          3. Vos droits
        </h2>
        <p>
          Conformément au RGPD, vous disposez d'un droit d'accès, de
          rectification et de suppression de vos données. Contactez-nous à :{" "}
          <strong>yvanngone53@gmail.com</strong>.
        </p>
      </section>

      <section className="border-t pt-6 text-sm text-gray-600 italic">
        <p>
          Note : Cette page est un modèle simplifié. Consultez un conseiller
          juridique pour une conformité totale.
        </p>
      </section>
    </main>
  );
};

export default PrivacyPolicy;
