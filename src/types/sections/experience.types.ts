export type ExperienceItem = {
    title: string
    organization: string
    date: string
    address: string
    url: string
}

export type Certification = {
    name: string
    issuer: string
    issuedDate: string
    image: string
}

export type ExperienceTab = "work" | "academic"

export type CertModalProps = {
    onClose: () => void
}