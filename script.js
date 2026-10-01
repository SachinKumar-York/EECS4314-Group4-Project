document.addEventListener("DOMContentLoaded", () => {
  const members = document.querySelectorAll(".member-list li");
  members.forEach((member, index) => {
    member.style.opacity = "0";
    member.style.transform = "translateY(10px)";

    setTimeout(
      () => {
        member.style.transition = "opacity 0.4s ease, transform 0.4s ease";
        member.style.opacity = "1";
        member.style.transform = "translateY(0)";
      },
      120 * index + 120,
    );
  });
});
