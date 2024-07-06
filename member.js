function skillsMember () {
  return {
    skills: ['JavaScript', 'React', 'Node.js'],
    addSkill: function (skill) {
      this.skills.push(skill)
    }
  }
}