export default function abbreviateMatchTitle(matchTitle) {
  // Split the match title on " vs " to separate the team names
  const teams = matchTitle.split(" vs ");

  // Function to convert a team name into its abbreviation
  const toAbbreviation = (teamName) => {
    const words = teamName.split(" ");
    // If it's a single word, abbreviate to the first three letters
    if (words.length === 1) {
      return teamName.substring(0, 3);
    }
    // Otherwise, use the first letter of each word to form the abbreviation
    return words.map((word) => word.charAt(0).toUpperCase()).join("");
  };

  // Apply the abbreviation conversion function to each team
  const abbreviatedTeams = teams.map(toAbbreviation);

  // Join the abbreviated team names with " vs " to form the final short match title
  return abbreviatedTeams.join(" vs ");
}
