const AboutTeam = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Personal Trainer",
      photo: "https://i.postimg.cc/W41zrCYs/gym-man-6.jpg",
      bio: "John is a certified personal trainer with 5 years of experience...",
      qualifications:
        "NASM Certified Personal Trainer, ACE Certified Health Coach",
    },
    {
      name: "Jane Smith",
      role: "Nutritionist",
      photo: "https://i.postimg.cc/L8ThJ2Ty/gym-man-7.jpg",
      bio: "Jane is a registered dietitian with a passion for helping people...",
      qualifications: "Registered Dietitian, Certified Diabetes Educator",
    },
    {
      name: "Michael Johnson",
      role: "Yoga Instructor",
      photo: "https://i.postimg.cc/28n1f4BN/gym-man-8.jpg",
      bio: "Michael is a certified yoga instructor with a focus on...",
      qualifications: "Yoga Alliance Certified, E-RYT 500",
    },
    {
      name: "jonathan smith",
      role: "Group Fitness Instructor",
      photo: "https://i.postimg.cc/7brrVJxg/man-gym2.webp",
      bio: "Emily is a dynamic group fitness instructor with a love for...",
      qualifications: "ACE Group Fitness Instructor, Zumba Instructor",
    },
    {
      name: "David Lee",
      role: "Strength and Conditioning Coach",
      photo: "https://i.postimg.cc/0jwqD0qk/man-gym1.webp",
      bio: "David is a certified strength and conditioning coach with...",
      qualifications: "NSCA Certified Strength and Conditioning Specialist",
    },
    {
      name: "willium smith",
      role: "Pilates Instructor",
      photo: "https://i.postimg.cc/FKCRxpw3/gym-man-5.jpg",
      bio: "Sarah is a certified Pilates instructor with a focus on...",
      qualifications: "Pilates Alliance Certified Instructor",
    },
  ];
  return (
    <section className="py-12 my-10">
      <h2 className="text-5xl font-bold text-center mb-8  italic tracking-wide bg-gradient-to-r from-[#06768d] to-[#e6f1f4] bg-clip-text text-transparent">
        Our Team
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mx-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="text-center bg-[#cccccc] rounded-2xl mx-2 p-3 line-clamp-4 text-xl font-sans tracking-wide font-bold"
          >
            <img
              src={member.photo}
              alt={member.name}
              className="rounded-full w-32 h-32 mx-auto mb-4"
            />
            <h3 className="text-xl font-medium">{member.name}</h3>
            <p className="text-gray-600">{member.role}</p>
            <p className="text-sm">{member.bio}</p>
            <p className="text-sm">{member.qualifications}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutTeam;
